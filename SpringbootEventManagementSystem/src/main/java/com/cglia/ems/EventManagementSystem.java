package com.cglia.ems;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories("com.cglia.ems.repository")
public class EventManagementSystem {

	public static void main(String[] args) {
		SpringApplication.run(EventManagementSystem.class, args);
	}

}
