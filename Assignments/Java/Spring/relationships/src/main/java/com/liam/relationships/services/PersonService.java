package com.liam.relationships.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.liam.relationships.models.License;
import com.liam.relationships.models.Person;
import com.liam.relationships.repositories.LicenseRepository;
import com.liam.relationships.repositories.PersonRepository;




@Service
public class PersonService {

	@Autowired
	private PersonRepository mainRepo;
	
	@Autowired
	private LicenseRepository licenseRepo;

	
    public List<Person> getAll() {
        return mainRepo.findAll();
    }
    
    public Person getOne(Long id) {
    	return mainRepo.findById(id).orElse(null);

    }
    

    public Person create(Person dommod) {
        return mainRepo.save(dommod);
    }
    


    
    public Person update(Person dommod) {
        return mainRepo.save(dommod);
    }

    	

    
    public void delete(Long Id) {
    	mainRepo.deleteById(Id);
    	}
    
    
    // New License
    
    public License createLicense(License dommod) {
        return licenseRepo.save(dommod);
    }

    }

