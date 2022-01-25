package com.liam.relationships.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.liam.relationships.models.License;
import com.liam.relationships.models.Person;
import com.liam.relationships.services.PersonService;



@Controller
public class PersonController {

	
	@Autowired
	private PersonService mainServ;
	
	// Get All
    @RequestMapping("/persons")
    public String index(@ModelAttribute("person") Person obj, Model model) {
        List<Person> everything = mainServ.getAll();
        model.addAttribute("persons", everything);
        return "/views/index.jsp";
    }
    
    // Get One
    @RequestMapping("/persons/{id}")
    public String show(@PathVariable("id") Long id, Model model) {
    	Person person = mainServ.getOne(id);
        model.addAttribute("person", person);
        return "/views/show.jsp";
    }
    
    // Create Form PAGE
    @RequestMapping("/persons/new")
    public String newForm(@ModelAttribute("person") Person obj) {
        return "/views/new.jsp";
    }

    // Create Processing
    @RequestMapping(value="/persons", method=RequestMethod.POST)
    public String create(@Valid @ModelAttribute("person") Person obj, BindingResult result, Model model) {
    	
        if (result.hasErrors()) {
//            return "/persons/new.jsp";
            List<Person> everything = mainServ.getAll();
            model.addAttribute("persons", everything);
            return "/views/index.jsp";
        } else {
        	mainServ.create(obj);
            return "redirect:/persons";
        }
    }
    
    // Edit Form
    @RequestMapping("/persons/{id}/edit")
    public String editForm(@PathVariable("id") Long id, Model model) {
    	Person person = mainServ.getOne(id);
        model.addAttribute("person", person);
        return "/views/edit.jsp";
    }
    
    // Edit Processing
    @RequestMapping(value="/persons/{id}", method=RequestMethod.PUT)
    public String update(@Valid @ModelAttribute("person") Person obj, BindingResult result) {
        if (result.hasErrors()) {
        	return "/views/edit.jsp";

        } else {
        	mainServ.update(obj);
            return "redirect:/persons";
        }
    }
    
    
    // Delete
    @RequestMapping(value="/persons/{id}", method=RequestMethod.DELETE)
    public String destroy(@PathVariable("id") Long id) {
    	mainServ.delete(id);
        return "redirect:/persons";
    }
    
    // 1:1 ///////////////////
    
    // License form
    @RequestMapping("/license")
    public String newLicenseForm(@ModelAttribute("license") License obj, Model model) {
        List<Person> everything = mainServ.getAll();
        model.addAttribute("persons", everything);
        return "/views/new.jsp";
    }
    
    // Create License Processing
    @RequestMapping(value="/create/license", method=RequestMethod.POST)
    public String createLicense(@Valid @ModelAttribute("license") License obj, BindingResult result, Model model) {
    	Long personId = obj.getPerson().getId();
        if (result.hasErrors()) {
//            return "/persons/new.jsp";
            List<Person> everything = mainServ.getAll();
            model.addAttribute("person", this.mainServ.getOne(personId));
            return "/views/new.jsp";
        } else {
        	mainServ.createLicense(obj);
            return "redirect:/persons";
        }
    }
}
