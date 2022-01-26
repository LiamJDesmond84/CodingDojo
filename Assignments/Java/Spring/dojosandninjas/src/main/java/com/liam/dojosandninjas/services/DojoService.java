package com.liam.dojosandninjas.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.liam.dojosandninjas.models.Dojo;
import com.liam.dojosandninjas.models.Ninja;
import com.liam.dojosandninjas.repositories.DojoRepository;
import com.liam.dojosandninjas.repositories.NinjaRepository;

@Service
public class DojoService {
	
	@Autowired
	private DojoRepository mainRepo;
	
	@Autowired
	private NinjaRepository ninjaRepo;
	
	public List<Dojo> getAll() {
        return mainRepo.findAll();
    }
    
    public Dojo getOne(Long id) {
    	return mainRepo.findById(id).orElse(null);

    }
    

    public Dojo create(Dojo dommod) {
        return mainRepo.save(dommod);
    }
    


    
    public Dojo update(Dojo dommod) {
        return mainRepo.save(dommod);
    }

    	

    
    public void delete(Long Id) {
    	mainRepo.deleteById(Id);
    	}
    
    
    // New Ninja
    
    public Ninja createSerf(Ninja dommod) {
        return ninjaRepo.save(dommod);
    }
    
    // Find all Serfs
	public List<Ninja> getAllSerfs() {
        return ninjaRepo.findAll();
    }
	
	// Delete Serf
    public void deleteSerf(Long Id) {
    	ninjaRepo.deleteById(Id);
    }
    
    // Get one Serf
    public Ninja getOneSerf(Long id) {
    	return ninjaRepo.findById(id).orElse(null);

    }

}
