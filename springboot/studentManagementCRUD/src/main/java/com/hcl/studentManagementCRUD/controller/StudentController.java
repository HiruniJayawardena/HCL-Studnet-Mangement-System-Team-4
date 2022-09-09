package com.hcl.studentManagementCRUD.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hcl.studentManagementCRUD.model.Student;
import com.hcl.studentManagementCRUD.service.StudentService;

@RestController
@CrossOrigin(allowedHeaders = "*", origins = "*")
public class StudentController {
	
	@Autowired
	private StudentService studentService;
	
	//to register a student
	@PostMapping("/registerStudent")
	public Student registerStudent(@RequestBody Student student) {
		return studentService.registerStudent(student);
	}
	
	//to retrieve the student list
	@GetMapping("/getStudents")
	public List<Student> getStudents(){
		return studentService.getStudents();
	}
	
	//to delete the student
	@DeleteMapping("/deleteStudent")
	public void deleteStudent(@RequestParam Integer id) {
		studentService.deleteStudent(id);
	}
	
	//to update a student
	@PutMapping("/updateStudent")
	public Student updateStudent(@RequestBody Student student) {
		return studentService.updateStudent(student);
	}
	
}
