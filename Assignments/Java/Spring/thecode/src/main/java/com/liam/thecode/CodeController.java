package com.liam.thecode;

import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
public class CodeController {
	
	
	@RequestMapping("/")
    public String showCount() {
        return "index.jsp";
    }
	
	@RequestMapping("/code")
    public String resetCount(HttpServletRequest request, RedirectAttributes redirectAttributes) {
		String code = request.getParameter("code");
		if (code.equals("bushido") == false) {
			System.out.println(code);
			redirectAttributes.addFlashAttribute("error", "You must train harder!");
	        return "redirect:/";
		}
		else { 
	        return "code.jsp";
		}


    }

}
