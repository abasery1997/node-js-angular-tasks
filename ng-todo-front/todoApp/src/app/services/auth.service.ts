import { SIGNUPRES_INTERFACE } from './../types/signup-res.interface';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LOGINRES_INTERFACE } from '../types/login-res.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl :string = 'http://localhost:3000/users' 
  constructor(private http: HttpClient ,private userService:UserService, private router:Router) { }

login(email:string, password:string){
  this.http.post<LOGINRES_INTERFACE>(`${this.baseUrl}/signin`,
  {
    email,
    password
  }).subscribe(
    data =>{
      this.userService.setuser(data)
      this.router.navigateByUrl('/')
    },
    err =>{
      console.log(err)
    }
  )
}

signup(name:string,email:string, password:string){
  this.http.post<SIGNUPRES_INTERFACE>(`${this.baseUrl}/signup`,{
    name,
    email,
    password
  }).subscribe(
    data =>{
     this.router.navigateByUrl('/login')
    },
    err =>{
      console.log(err)
    }
  )
}
signout(){
  this.userService.clear()
  this.router.navigateByUrl('/login')
}

}
