package com.example.SmartHiveAPI;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class SmartHiveApiApplication {
	public static void main(String[] args) {
		SpringApplication.run(SmartHiveApiApplication.class, args);
	}
}
