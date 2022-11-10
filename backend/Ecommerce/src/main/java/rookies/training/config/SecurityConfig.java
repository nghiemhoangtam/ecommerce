package rookies.training.config;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import org.springframework.web.cors.CorsConfiguration;
import rookies.training.repository.UserRepository;
import rookies.training.security.JwtTokenFilter;
import rookies.training.service.impl.UserDetailsServiceImpl;

import java.util.List;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	
	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private JwtTokenFilter jwtTokenFilter;
	@Autowired
	UserDetailsService userDetailsService;
	
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userDetailsService);
		
	}
	
	
	
	@Override
	@Bean
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		CorsConfiguration config = new CorsConfiguration();

		config.setAllowCredentials(true);
		config.setAllowedHeaders(List.of("Authorization", "Cache-Control", "Content-Type", "token"));
		config.addAllowedMethod("*");
		config.setAllowedOrigins(List.of("http://localhost:3000"));

		http.csrf().disable().cors().configurationSource(request -> config);
		http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
		
		http.exceptionHandling().authenticationEntryPoint(
				(request,response,ex)->{
					response.sendError(HttpServletResponse.SC_UNAUTHORIZED,ex.getMessage());
				}
			);
		
		http.authorizeHttpRequests()
				.antMatchers("/login","/register","/swagger-ui/**","/v3/**").permitAll()
				.antMatchers(HttpMethod.GET,"/api/**").permitAll()
				.antMatchers("/api/**").authenticated()
				.anyRequest().authenticated();
		http.addFilterBefore(jwtTokenFilter, UsernamePasswordAuthenticationFilter.class);
	}
	
	

}

