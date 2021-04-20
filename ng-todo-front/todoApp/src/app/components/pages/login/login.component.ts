import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email :string = ''
  password :string = ''

  constructor(private authService:AuthService) { }

  ngOnInit(): void {}
  login(){
    try{
      if(this.email&&this.password){
        this.authService.login(this.email.trim(),this.password)  
      }else{
        window.alert('enter your email & password')
      }
      this.authService.login(this.email.trim(),this.password)
    }catch (err){
      console.log('error is ',err)
    }
  }
}
