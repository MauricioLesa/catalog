package Catalog.backend.Config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.annotation.web.configurers.LogoutConfigurer;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.SecurityFilterChain;


@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final UserDetailsService userDetailsService;
    private final AuthenticationProvider authenticationProvider;





    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity htttp) throws Exception {
        return htttp
                .csrf(AbstractHttpConfigurer::disable)
                .cors(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(auths -> auths
                        .requestMatchers("/auth/**").permitAll()
                        .requestMatchers("/").authenticated()
                        .anyRequest())
                .logout(LogoutConfigurer::permitAll)
                .authenticationProvider(authenticationProvider)
                .userDetailsService(userDetailsService)
                .build();
    }


}
