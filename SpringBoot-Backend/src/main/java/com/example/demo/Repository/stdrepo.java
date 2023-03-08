package com.example.demo.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.stdentity;
public interface stdrepo extends JpaRepository<stdentity,Integer>{
}