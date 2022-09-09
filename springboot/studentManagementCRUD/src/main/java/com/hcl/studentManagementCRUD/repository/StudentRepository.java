package com.hcl.studentManagementCRUD.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.hcl.studentManagementCRUD.model.Student;

@Repository
public interface StudentRepository extends CrudRepository<Student, Integer>{

}
