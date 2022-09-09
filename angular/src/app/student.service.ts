import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  API = 'http://localhost:8080';//common URL that has to be used to connect with backend(database)

  //passing student details to add a student
  public registerStudent(studentData: any){
    return this.http.post(this.API+"/registerStudent", studentData);
  }

  //sending request to get student list
  public getStudents(){
    return this.http.get(this.API+"/getStudents");
  }
  //passing student id to delete a student
  public deleteStudent(id: number){
    return this.http.delete(this.API+"/deleteStudent?id="+id);
  }
  //passing student details to update a student
  public updateStudent(studentNewData: any){
    return this.http.put(this.API+"/updateStudent", studentNewData);
  }
}
