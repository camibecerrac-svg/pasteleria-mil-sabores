package com.example.demo.controller;

import com.example.demo.auth.AuthRequest;
import com.example.demo.auth.Role;
import com.example.demo.auth.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin
public class AuthController {

    @Autowired
    private UserService userService;

    // -------- REGISTRO (cliente) --------
    @PostMapping("/register")
    public MessageResponse register(@RequestBody AuthRequest request) {
        userService.register(
                request.getEmail(),
                request.getPassword(),
                Role.CLIENTE
        );
        return new MessageResponse("Usuario registrado correctamente");
    }

    // -------- CREAR ADMIN (nuevo) --------
    @PostMapping("/create-admin")
    public MessageResponse createAdmin(@RequestBody AuthRequest request) {

        userService.createAdmin(
                request.getEmail(),
                request.getPassword()
        );

        return new MessageResponse("Administrador creado correctamente");
    }

    // -------- LOGIN --------
    @PostMapping("/login")
    public LoginResponse login(@RequestBody AuthRequest request) {

        String token = userService.login(request.getEmail(), request.getPassword());
        User user = userService.findByEmail(request.getEmail());

        return new LoginResponse(token, "Login exitoso", user.getRole().name(), user.getEmail());
    }

    // -------- OBTENER USUARIO DEL TOKEN --------
    @GetMapping("/me")
    public UserDataResponse me(@RequestHeader("Authorization") String authHeader) {

        String token = authHeader.replace("Bearer ", "");
        String email = userService.getEmailFromToken(token);
        User user = userService.findByEmail(email);

        return new UserDataResponse(user.getEmail(), user.getRole().name());
    }

    // ---------------- RECORDS ----------------

    public record LoginResponse(String token, String message, String role, String email) {}
    public record MessageResponse(String message) {}
    public record UserDataResponse(String email, String role) {}
}
