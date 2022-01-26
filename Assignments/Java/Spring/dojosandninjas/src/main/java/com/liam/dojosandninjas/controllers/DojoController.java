package com.liam.dojosandninjas.controllers;

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

import com.liam.dojosandninjas.models.Dojo;
import com.liam.dojosandninjas.models.Ninja;
import com.liam.dojosandninjas.services.DojoService;

@Controller
public class DojoController {
	
	@Autowired
	private DojoService mainServ;
	
	// Dashboard
	@RequestMapping("/")
	public String index() {
		return "redirect:/dojos";
	}
	
	// Get All
    @RequestMapping("/dojos")
    public String dashboard(@ModelAttribute("dojo") Dojo obj, Model model) {
        List<Dojo> everything = mainServ.getAll();
        model.addAttribute("dojos", everything);
        return "/views/index.jsp";
    }
    
    // Get One with Serfs
    @RequestMapping("/dojos/{id}")
    public String show(@PathVariable("id") Long id, Model model) {
    	model.addAttribute("dojo", this.mainServ.getOne(id));
        return "/views/show.jsp";
    }
    
    // Create Form PAGE
    @RequestMapping("/dojos/new")
    public String newForm(@ModelAttribute("dojo") Dojo obj) {
        return "/views/new.jsp";
    }

    // Create Processing
    @RequestMapping(value="/dojos", method=RequestMethod.POST)
    public String create(@Valid @ModelAttribute("dojo") Dojo obj, BindingResult result, Model model) {
    	
        if (result.hasErrors()) {
        	
            List<Dojo> everything = mainServ.getAll();
            model.addAttribute("dojos", everything);
            return "/views/index.jsp";
        } else {
        	mainServ.create(obj);
            return "redirect:/dojos";
        }
    }
    
    // Edit Form
    @RequestMapping("/dojos/{id}/edit")
    public String editForm(@PathVariable("id") Long id, Model model) {
    	Dojo dojo = mainServ.getOne(id);
        model.addAttribute("dojo", dojo);
        return "/views/edit.jsp";
    }
    
    // Edit Processing
    @RequestMapping(value="/dojos/{id}", method=RequestMethod.PUT)
    public String update(@Valid @ModelAttribute("dojo") Dojo obj, BindingResult result) {
        if (result.hasErrors()) {
        	return "/views/edit.jsp";

        } else {
        	mainServ.update(obj);
            return "redirect:/dojos";
        }
    }
    
    
    // Delete
    @RequestMapping(value="/dojos/{id}", method=RequestMethod.DELETE)
    public String destroy(@PathVariable("id") Long id) {
    	mainServ.delete(id);
        return "redirect:/dojos";
    }
    
    // ONE:MANY ///////////////////
    
    // Serf form
    @RequestMapping("/ninja")
    public String newSerfForm(@ModelAttribute("ninja") Ninja obj, Model model) {
        List<Dojo> everything = mainServ.getAll();
        model.addAttribute("dojos", everything);
        return "/views/new.jsp";
    }
    
    // Create Serf Processing
    @RequestMapping(value="/create/ninja", method=RequestMethod.POST)
    public String createSerf(@Valid @ModelAttribute("ninja") Ninja obj, BindingResult result, Model model) {
//    	Long dojoId = obj.getDojo().getId();
        if (result.hasErrors()) {
            List<Dojo> everything = mainServ.getAll();
            model.addAttribute("dojos", everything);
            return "/views/new.jsp";
        } else {
        	mainServ.createSerf(obj);
            return String.format("redirect:/dojos/%s", obj.getDojo().getId());
        }
    }
    
    // Get all Serfs
    @RequestMapping("/ninjas")
    public String getAllOthers(Model model) {
    	
    	List<Ninja> allOthers = mainServ.getAllSerfs();
        model.addAttribute("ninjas", allOthers);
        return "/views/others.jsp";
    }
    
    // Get one Serf
    @RequestMapping("/ninjas/show/{id}")
    public String getOneSerf(@PathVariable("id") Long id, Model model) {
    	Ninja serf = mainServ.getOneSerf(id);
    	Dojo dojo = serf.getDojo();
    	
        // Just testing
    	List<Ninja> allOthers = mainServ.getAllSerfs();
        model.addAttribute("ninjas", allOthers);
    	// End

    	model.addAttribute("ninja", serf);
        model.addAttribute("dojo", dojo);
        return "/views/others.jsp";
    }
    
    
    // Delete Serf
    @RequestMapping(value="/ninjas/{id}", method=RequestMethod.DELETE)
    public String destroySerf(@PathVariable("id") Long id) {
    	Ninja serf = mainServ.getOneSerf(id);
    	Dojo dojo = serf.getDojo();
    	Dojo dojoId= mainServ.getOne(id);
    	mainServ.delete(id);
    	
    	return String.format("redirect:/dojos/%s", dojoId.getId());
//        return "redirect:/dojos";
    }
    
    


}
