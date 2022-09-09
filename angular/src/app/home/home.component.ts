import { LoginComponent } from './../login/login.component';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent   {
//student array to save the student list retrieved from database
  studentsArray = null;
//to check wether to show student details table or not
  arrayLength: number = 0;
//to save the id that has to be deleted
  deleteRollNum!:number;

//to temporarily save the student detail before updating
  studentUpdate ={
    rollNumber: 0,
    name: "",
    address: "",
    marks: ""
  };
//to show the student table if the array is not null
  public studentTable: boolean = false;

  constructor(private studentService: StudentService) {
    this.getStudentsDetails();
  }

  ngOnInit(): void {
    this.getStudentsDetails();
  }

//to validate the name has only characters
  nameValidatonResult: boolean=true;
  nameValidation(params:string):boolean {
    return /\d/.test(params);
  }
  
  //to add student
  register(registerForm: NgForm){
    this.nameValidatonResult =this.nameValidation(registerForm.value.name);
    console.log(this.nameValidatonResult);
    if(this.nameValidatonResult!=true){
      if((registerForm.value.name != null && registerForm.value.name !="" )&& (registerForm.value.address != null && registerForm.value.address !="") && registerForm.value.marks != null) {
        this.studentService.registerStudent(registerForm.value).subscribe(
          (response: any) => {
            console.log(response);
            registerForm.reset();
            this.getStudentsDetails();
            this.studentTable = true;
          },
          (error: any) => {
            console.log(error);
          }
        );
      }else{
        alert("PLEASE ENTER ALL THE DETAILS");
      }
    }else{
      alert("NAME SHOULD NOT CONTAIN NUMBERS");
    }
    
    
  }
//to get the student list
  getStudentsDetails(){
    this.studentService.getStudents().subscribe(
      (response: any) => {
        console.log(response);
        this.studentsArray = response;
        this.arrayLength = response.length;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }


//to delete the student
  delete(student: { rollNumber: number; name: string; address: string; marks: string; }){
    this.deleteRollNum = student.rollNumber;
  }

  deleteStudent(){
    this.studentService.deleteStudent(this.deleteRollNum).subscribe(
      (response: any) => {
        console.log(response);
        this.getStudentsDetails();
        console.log("Array length"+this.arrayLength);
        if(this.arrayLength == 1){
          this.studentTable = false;
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
//to update the student
  update(student: { rollNumber: number; name: string; address: string; marks: string; }){
    this.studentUpdate = student;
  }

  updateStudent(){
    this.studentService.updateStudent(this.studentUpdate).subscribe(
      (response: any) => {
        console.log(response);
        this.getStudentsDetails();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

}
