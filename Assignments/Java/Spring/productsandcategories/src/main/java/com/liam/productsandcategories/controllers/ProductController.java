package com.liam.productsandcategories.controllers;

import java.util.List;

//import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.liam.productsandcategories.models.Category;
import com.liam.productsandcategories.models.Product;
import com.liam.productsandcategories.services.ProductService;

@Controller
public class ProductController {
	
	@Autowired
	private ProductService mainServ;
	
	// Dashboard
	@RequestMapping("/")
	public String index() {
		return "redirect:/products";
	}
	
	// Get All
    @RequestMapping("/products")
    public String dashboard(@ModelAttribute("product") Product obj, Model model) {
        List<Product> everything = mainServ.getAll();
        model.addAttribute("products", everything);
        return "index.jsp";
    }
    
    // Get Main with Serfs
    @RequestMapping("/products/show/{id}")
    public String show(@PathVariable("id") Long id, Model model) {
    	Product product = mainServ.getOne(id);
    	
    	List<Category> allOthers = mainServ.findByProductsNotContains(product);
//    	List<Category> allOthers = mainServ.getAllSerfs();
    	
    	
        model.addAttribute("categories", allOthers);
    	model.addAttribute("product", mainServ.getOne(id));
        return "show.jsp";
    }
    
    // Create Form PAGE
    @RequestMapping("/products/new")
    public String newForm(@ModelAttribute("product") Product obj) {
        return "new.jsp";
    }

    // Create Processing
    @RequestMapping(value="/create/product", method=RequestMethod.POST)
    public String create(@Valid @ModelAttribute("product") Product obj, BindingResult result, Model model) {
    	
        if (result.hasErrors()) {
        	
            List<Product> everything = mainServ.getAll();
            model.addAttribute("products", everything);
            return "new.jsp";
        } else {
        	mainServ.create(obj);
            return "redirect:/products";
        }
    }
    
    // Edit Form
    @RequestMapping("/products/{id}/edit")
    public String editForm(@PathVariable("id") Long id, Model model) {
    	Product product = mainServ.getOne(id);
        model.addAttribute("product", product);
        return "edit.jsp";
    }
    
    // Edit Processing
    @RequestMapping(value="/products/{id}", method=RequestMethod.PUT)
    public String update(@Valid @ModelAttribute("product") Product obj, BindingResult result) {
        if (result.hasErrors()) {
        	return "edit.jsp";

        } else {
        	mainServ.update(obj);
            return "redirect:/products";
        }
    }
    
    
    // Delete
    @RequestMapping(value="/products/{id}", method=RequestMethod.DELETE)
    public String destroy(@PathVariable("id") Long id) {
    	mainServ.delete(id);
        return "redirect:/products";
    }
    
    // ONE:MANY ///////////////////
    
    // Serf form
    @RequestMapping("/categories/new")
    public String newSerfForm(@ModelAttribute("category") Category obj, Model model) {
        List<Product> everything = mainServ.getAll();
        model.addAttribute("products", everything);
        return "newSerf.jsp";
    }
    
    // Create Serf Processing
    @RequestMapping(value="/create/category", method=RequestMethod.POST)
    public String createSerf(@Valid @ModelAttribute("category") Category obj, BindingResult result, Model model) {
//    	Long productId = obj.getProduct().getId();
        if (result.hasErrors()) {
            List<Product> everything = mainServ.getAll();
            model.addAttribute("products", everything);
            return "newSerf.jsp";
        } else {
        	mainServ.createSerf(obj);
        	return "redirect:/products";
//            return String.format("redirect:/products/%s", obj.getProducts().getId());
        }
    }
    
    // Get all Serfs
    @RequestMapping("/categories")
    public String getAllOthers(Model model) {
    	
    	List<Category> allOthers = mainServ.getAllSerfs();
        model.addAttribute("categories", allOthers);
        return "serfs.jsp";
    }
    
    // Get one Serf with Mains
    @RequestMapping("/categories/show/{id}")
    public String getOneSerf(@PathVariable("id") Long id, Model model) {
    	Category serf = mainServ.getOneSerf(id);

    	List<Product> allOthers = mainServ.findByCategoriesNotContains(serf);
//    	List<Product> allOthers = mainServ.getAll();


    	model.addAttribute("category", serf);
        model.addAttribute("products", allOthers);
        return "showSerf.jsp";
    }
    
    // Edit Serf Form
    @RequestMapping("/categories/edit/{id}")
    public String editSerfForm(@PathVariable("id") Long id, Model model) {
    	Product product = mainServ.getOne(id);
        model.addAttribute("product", product);
        return "editSerf.jsp";
    }
    
    // Edit Serf Processing
    @RequestMapping(value="/categories/{id}", method=RequestMethod.PUT)
    public String updateSerf(@Valid @ModelAttribute("product") Category obj, BindingResult result) {
        if (result.hasErrors()) {
        	return "editSerf.jsp";

        } else {
        	mainServ.updateSerf(obj);
            return "redirect:/categories";
        }
    }
    
    
    // Delete Serf
    @RequestMapping(value="/categorys/{id}", method=RequestMethod.DELETE)
    public String destroySerf(@PathVariable("id") Long id) {
    	Category serf = mainServ.getOneSerf(id);
    	List<Product> products = serf.getProducts();
    	Product productId= mainServ.getOne(id);
    	mainServ.delete(id);
    	
    	return String.format("redirect:/products/%s", productId.getId());
//        return "redirect:/products";
    }
    
    
    
    
    
    // MANY TO MANY////////////////////////////////////////////////////////////////////////////
    
    
	// Add Serf to Main
    @RequestMapping("/addSerfToMain/{id}")
	public String addSerftoMain(@PathVariable("id") Long id, @RequestParam("category_id") Long serfId) {

		Category serfToAdd = mainServ.getOneSerf(serfId);
		Product mainToAddTo = mainServ.getOne(id);
		
		mainServ.addSerfToMain(serfToAdd, mainToAddTo);
		return "redirect:/products/show/" + id;
	}
	
	// Remove Serf from Main ----------- ???
    @RequestMapping("/RemoveSerfFromMain/{id}")
	public String removeSerfFromMain(@PathVariable("id") Long id, @RequestParam("category_id") Long serfId) {

		Category serfToRemove = mainServ.getOneSerf(serfId);
		Product mainToRemoveFrom = mainServ.getOne(id);
		
		mainServ.removeSerfFromMain(serfToRemove, mainToRemoveFrom);
		return "redirect:/products/";
	}
    
    
	// Add Main to Serf
    @RequestMapping("/addMainToSerf/{id}")
	public String addMainToSerf(@PathVariable("id") Long id, @RequestParam("product_id") Long mainId) {

		Product mainToAdd = mainServ.getOne(mainId);
		Category serfToAddTo = mainServ.getOneSerf(id);
		
		mainServ.addMainToSerf(mainToAdd, serfToAddTo);
		return "redirect:/categories/show/" + id;
	}
	
	// Remove Main from Serf --------------- ???
    @RequestMapping("/RemoveMainFromSerf/{id}")
	public String removeMainFromSerf(@PathVariable("id") Long id, @RequestParam("product_id") Long mainId) {

		Product mainToRemove = mainServ.getOne(mainId);
		Category serfToRemoveFrom = mainServ.getOneSerf(id);
		
		mainServ.removeMainFromSerf(mainToRemove, serfToRemoveFrom);
		return "redirect:/categories/";
	}

}
