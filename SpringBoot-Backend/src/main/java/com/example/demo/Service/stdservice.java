package com.example.demo.Service;

import java.util.List;

//import java.util.stream.Stream;

//import java.util.stream.Stream;

//package com.example.StudentExample.Sevice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
//import org.springframework.data.mapping.PersistentEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.demo.Entity.stdentity;
import com.example.demo.Repository.stdrepo;
@Service
public class stdservice

{
	@Autowired(required=true)
	stdrepo stRepo;
	
	public stdentity saveDetails(stdentity e)
	{
		return stRepo.save(e);
	}
	public List<stdentity> getDetails(){
		return stRepo.findAll();
	} 
	public stdentity updateDetails(stdentity e) {
		return stRepo.saveAndFlush(e);
	}
	public void deleteDetails(int id) {
		stRepo.deleteById(id);
		
	}
	public List<stdentity> getSorted(String sname){
		return stRepo.findAll(Sort.by(Sort.Direction.ASC,sname));
	}

	public List<stdentity> getWithPagination(@PathVariable int offset,@PathVariable int pageSize){
		Page<stdentity> page = stRepo.findAll(PageRequest.of(offset,pageSize));
		return page.getContent();


}
}