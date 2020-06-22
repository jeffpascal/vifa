package com.example.demo.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SurveyController {
	
	@GetMapping("/hello")
	public String survey() {
		return "works";
	}
}	
