import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

//user credentials to login
  user:any={
    username : 'admin',
    password: 'admin123'
  }

//to validate the user credentials  
  validateCredentials(val: any){
    if(this.user.username === val.username && this.user.password === val.password){
      this.router.navigate(['/home']);
 
    }else{
      alert('INVALID USERNAME OR PASSWORD');      
    }
  }

}
