package com.liam.productsandcategories.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.liam.productsandcategories.models.Category;
import com.liam.productsandcategories.models.Product;

@Repository
public interface CategoryRepository extends CrudRepository<Category, Long> {
	
	List<Category> findAll();
	
	// Retrieves a list of all categories for a particular product
    List<Category> findAllByProducts(Product product);

    // Retrieves a list of any categories a particular product
    // does not belong to.
    List<Category> findByProductsNotContains(Product product);
	
	
//    // Retrieves a list of all products for a particular category
//    List<Product> findAllByCategories(Category category);
//	
//	// Retrieves a list of any products a particular category
//    // does not belong to.
//	
//	List<Product> findByCategoriesNotContains(Category category);
	
	
	
//    // Retrieves a list of all categories for a particular product
//    List<Category> findAllByProducts(Product product);
//	
//	// Retrieves a list of any categories a particular product
//    // does not belong to.
//	
//	List<Category> findByProductsNotContains(Product product);
	
	

}
