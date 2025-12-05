package com.example.demo.service;

import com.example.demo.auth.Role;
import com.example.demo.auth.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;

    // Registrar usuario normal (CLIENTE por defecto)
    public User register(String email, String password, Role role) {
        User user = new User();
        user.setEmail(email);
        user.setPassword(passwordEncoder.encode(password));
        user.setRole(role);

        return userRepository.save(user);
    }

    // Login: genera token
    public String login(String email, String password) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new RuntimeException("Contraseña incorrecta");
        }

        return jwtUtil.generateToken(email, user.getRole().name());
    }

    // Obtener email del token
    public String getEmailFromToken(String token) {
        return jwtUtil.extractUsername(token);
    }

    // Buscar usuario por email
    public User findByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
    }

    // 🔥 NUEVO: Crear usuario ADMIN manualmente
    public User createAdmin(String email, String password) {

        // Evitar dos admins con el mismo correo
        if (userRepository.findByEmail(email).isPresent()) {
            throw new RuntimeException("Ese email ya está registrado");
        }

        User admin = new User();
        admin.setEmail(email);
        admin.setPassword(passwordEncoder.encode(password));
        admin.setRole(Role.ADMIN);

        return userRepository.save(admin);
    }
}
