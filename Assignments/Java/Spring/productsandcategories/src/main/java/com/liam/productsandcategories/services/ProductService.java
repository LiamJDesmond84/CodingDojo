package com.liam.productsandcategories.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.liam.productsandcategories.models.Category;
import com.liam.productsandcategories.models.Product;
import com.liam.productsandcategories.repositories.CategoryRepository;
import com.liam.productsandcategories.repositories.ProductRepository;

@Service
public class ProductService {
	
	@Autowired
	private ProductRepository mainRepo;
	
	@Autowired
	private CategoryRepository categRepo;
	
	public List<Product> getAll() {
        return mainRepo.findAll();
    }
    
    public Product getOne(Long id) {
    	return mainRepo.findById(id).orElse(null);

    }
    
    // Get all Serfs that Main doesn't belong to
    public List<Product> findByCategoriesNotContains(Category category) {
    	return mainRepo.findByCategoriesNotContains(category);
    }

    public Product create(Product dommod) {
        return mainRepo.save(dommod);
    }
    


    
    public Product update(Product dommod) {
        return mainRepo.save(dommod);
    }

    	

    
    public void delete(Long Id) {
    	mainRepo.deleteById(Id);
    	}
    
    
    // New Serf
    
    public Category createSerf(Category dommod) {
        return categRepo.save(dommod);
    }
    
    // Find all Serfs
	public List<Category> getAllSerfs() {
        return categRepo.findAll();
    }
	
	// Delete Serf
    public void deleteSerf(Long Id) {
    	categRepo.deleteById(Id);
    }
    
    // Get one Serf
    public Category getOneSerf(Long id) {
    	return categRepo.findById(id).orElse(null);

    }
    
    // Get all Mains that Serf doesn't belong to
    public List<Category> findByProductsNotContains(Product product) {
    	return categRepo.findByProductsNotContains(product);
    }
    
    // Edit Serf
    public Category updateSerf(Category dommod) {
        return categRepo.save(dommod);
    }
    
    
    // MANY TO MANY
    
    
	// Add Serf to Main
	public void addSerfToMain(Category category, Product product) {
		product.getCategories().add(category);
		
		this.mainRepo.save(product);
	}
	
	// Remove Serf from Main
	public void removeSerfFromMain(Category category, Product product) {
		product.getCategories().remove(category);
		
		this.mainRepo.save(product);
	}
	
	
    
    
	// Add Main to Serf
	public void addMainToSerf(Product product, Category category) {
		category.getProducts().add(product);

		this.categRepo.save(category);
	}
	
	// Remove Main from Serf
	public void removeMainFromSerf(Product product, Category category) {
		category.getProducts().add(product);

		this.categRepo.save(category);
	}
    

}


//// Add Serf to Main
//public void addSerfToMain(Category category, Product product) {
//	product.getCategories().add(category);
//	
//	
////	// Get array list of Serfs from Main object
////	List<Category> prodCategories = product.getCategories();
////	// Add Serf to list
////	prodCategories.add(category);
//	
//	// Update the Database
//	this.mainRepo.save(product);
//}
//
//// Add Main to Serf
//public void addMainToSerf(Product product, Category category) {
//	category.getProducts().add(product);
//	// Get array list of Mains from Serf object
////	List<Product> categoriesProds = category.getProducts();
//	// Add Main to list
////	categoriesProds.add(product);
//	// Update the Database
//	this.categRepo.save(category);
//}
