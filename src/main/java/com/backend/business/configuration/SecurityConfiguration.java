package com.backend.business.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.crypto.password.StandardPasswordEncoder;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		PasswordEncoder encoder = new StandardPasswordEncoder();

		auth
				.inMemoryAuthentication()
				.withUser("user")
				.password("password")
				.roles("USER")
				.and()
				.withUser("admin")
				.password("admin")
				.roles("USER", "ADMIN");
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.csrf().
				disable()
				.authorizeRequests()
				.antMatchers(HttpMethod.OPTIONS, "/**")
				.permitAll()
				.anyRequest()
				.authenticated()
				.and()
				.httpBasic();
	}
}
