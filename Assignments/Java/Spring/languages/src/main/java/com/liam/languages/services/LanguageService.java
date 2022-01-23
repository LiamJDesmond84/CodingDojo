package com.liam.languages.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.liam.languages.models.Language;
import com.liam.languages.repositories.LanguageRepository;


@Service
public class LanguageService {
	
	@Autowired
	private LanguageRepository languageRepo;

	

    public List<Language> allLanguages() {
        return languageRepo.findAll();
    }
    

    public Language createLanguage(Language lang) {
        return languageRepo.save(lang);
    }
    

    public Language findLanguage(Long id) {
        Optional<Language> optionalLanguage = languageRepo.findById(id);
        
        if(optionalLanguage.isPresent()) {
            return optionalLanguage.get();
        }
        else {
            return null;
        }
    }
    
    public Language updateLanguage(Language updatedlang) {

        return languageRepo.save(updatedlang);
    }

    	

    
    public void deleteLanguage(Long Id) {
    	Optional<Language> optionalLanguage = (languageRepo.findById(Id));
    	if(optionalLanguage.isPresent()) {
    		languageRepo.deleteById(Id);
    	}

    }
}
