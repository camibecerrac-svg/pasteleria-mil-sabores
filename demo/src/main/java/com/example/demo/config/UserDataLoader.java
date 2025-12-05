package com.example.demo.config;

import com.example.demo.auth.Role;
import com.example.demo.auth.User;
import com.example.demo.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class UserDataLoader {

    @Bean
    CommandLineRunner initUsers(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        return args -> {

            // Crear ADMIN si no existe
            if (!userRepository.findByEmail("admin@gmail.com").isPresent()) {
                User admin = new User();
                admin.setEmail("admin@gmail.com");
                admin.setPassword(passwordEncoder.encode("admin123"));
                admin.setRole(Role.ADMIN);

                userRepository.save(admin);
                System.out.println("✔ ADMIN creado: admin@gmail.com / admin123");
            }

            // Crear CLIENTE si no existe
            if (!userRepository.findByEmail("cliente@gmail.com").isPresent()) {
                User cliente = new User();
                cliente.setEmail("cliente@gmail.com");
                cliente.setPassword(passwordEncoder.encode("cliente123"));
                cliente.setRole(Role.CLIENTE);

                userRepository.save(cliente);
                System.out.println("✔ CLIENTE creado: cliente@gmail.com / cliente123");
            }
        };
    }
}
