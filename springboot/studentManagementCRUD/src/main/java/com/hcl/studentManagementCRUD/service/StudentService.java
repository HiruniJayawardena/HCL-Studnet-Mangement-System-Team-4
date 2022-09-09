package com.hcl.studentManagementCRUD.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.studentManagementCRUD.model.Student;
import com.hcl.studentManagementCRUD.repository.StudentRepository;

@Service
public class StudentService {
	@Autowired
	private StudentRepository studentRepository;

	public Student registerStudent(Student student) {
		return studentRepository.save(student);
	}
	
	public List<Student> getStudents(){
		return (List<Student>)studentRepository.findAll();
	}
	
	public void deleteStudent(Integer id) {
		studentRepository.deleteById(id);
	}
	
	public Student updateStudent(Student student) {
		Integer rollNo = student.getRollNumber();
		Student studentOld = studentRepository.findById(rollNo).get();
		studentOld.setName(student.getName());
		studentOld.setAddress(student.getAddress());
		studentOld.setMarks(student.getMarks());
		
		return studentRepository.save(studentOld);
	}
	
}
