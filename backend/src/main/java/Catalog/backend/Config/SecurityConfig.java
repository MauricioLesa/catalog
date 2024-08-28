package Catalog.backend.Config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.annotation.web.configurers.LogoutConfigurer;
import org.springframework.security.config.annotation.web.configurers.SessionManagementConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.context.HttpSessionSecurityContextRepository;
import org.springframework.security.web.context.SecurityContextRepository;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final UserDetailsService userDetailsService;
    private final AuthenticationProvider authenticationProvider;





    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity htttp) throws Exception {
        SecurityContextRepository securityContextRepository = new HttpSessionSecurityContextRepository();
        return htttp
                .authorizeHttpRequests(auths -> auths
                        .requestMatchers("/auth/**").permitAll()
                        .requestMatchers("/product/**").authenticated()
                        .requestMatchers("/image/**").authenticated()
                        )
                .csrf(AbstractHttpConfigurer::disable)
                .securityContext((context) -> context.securityContextRepository(securityContextRepository))
                .sessionManagement(session -> {
                            session.maximumSessions(1).maxSessionsPreventsLogin(true);
                            session.sessionFixation(SessionManagementConfigurer.SessionFixationConfigurer::newSession);
                            session.sessionCreationPolicy(SessionCreationPolicy.IF_REQUIRED);
                        }
                )
                .authenticationProvider(authenticationProvider)
                .userDetailsService(userDetailsService)
                .build();
    }


}
