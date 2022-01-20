package com.liam.routing1;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DojoController {
	
	@RequestMapping("/{dojo}")
	public String dojo(@PathVariable("dojo") String dojo) {
		return "The " + dojo + "  is awesome!";
		}
	
	@RequestMapping("/{burbank}-dojo")
	public String burbank(@PathVariable("burbank") String burbank) {
		return burbank + " Dojo is located in Southern California";
		}
	
	@RequestMapping("/{san}-jose")
	public String sanjose(@PathVariable("san") String san) {
		return "SJ dojo is the headquarters";
		}


}
