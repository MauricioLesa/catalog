package Catalog.backend.Config;

import Catalog.backend.Services.JpaUserDetailsService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;


@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final JpaUserDetailsService jpaUserDetailsService;


    @Bean
    AuthenticationProvider authenticationProvider(){
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setUserDetailsService(jpaUserDetailsService);
        provider.setPasswordEncoder(new BCryptPasswordEncoder());
        return provider;
    }

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity htttp) throws Exception {
        return htttp.
                csrf(csrf -> csrf.disable()).
                authorizeHttpRequests(auths -> auths
                        .requestMatchers("/authentication/**").permitAll()
                        .anyRequest().authenticated())
                .headers(header -> header.frameOptions(frameOptionsConfig -> frameOptionsConfig.sameOrigin()))
                .userDetailsService(jpaUserDetailsService)
                .build();
    }

    @Bean
    PasswordEncoder passwordEncoder(){
        return NoOpPasswordEncoder.getInstance();
    }
}
