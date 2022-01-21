package com.liam.dojosurvey;

import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class SurveyController {
	
	@RequestMapping("/")
    public String index() {
        return "index.jsp";
    }
	
	@RequestMapping(value="/result", method=RequestMethod.POST)
    public String result(HttpServletRequest request, Model model) {
		String name = request.getParameter("name");
		String location = request.getParameter("location");
		String language = request.getParameter("language");
		String comment = request.getParameter("comment");
		
		model.addAttribute("name", name);
		model.addAttribute("location", location);
		model.addAttribute("language", language);
		model.addAttribute("comment", comment);
		
		
			
	        return "result.jsp";
		}



}
