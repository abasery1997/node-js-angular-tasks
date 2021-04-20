import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name:string = ''
  email:string = ''
  password:string = ''
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  signup(){
    try{

      if(this.name &&this.email&&this.password){
        this.authService.signup(this.name.trim(),this.email.trim(),this.password)
        
      }else{
        window.alert('enter your name & email & password')
      }
      console.log(this.name ,'you have created your email')
    }catch(err){
      console.log('some thing went wrong',err)
    }

  }

}
