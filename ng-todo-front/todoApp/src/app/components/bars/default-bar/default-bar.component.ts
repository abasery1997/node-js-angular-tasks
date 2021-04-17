import { AuthService } from 'src/app/services/auth.service';
import { UserService } from './../../../services/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-bar',
  templateUrl: './default-bar.component.html',
  styleUrls: ['./default-bar.component.css']
})
export class DefaultBarComponent implements OnInit {

  constructor(private userService:UserService, private router:Router ,private authService:AuthService) { }

  ngOnInit(): void {
  }

  get userExist(){
    return this.userService.userExist
  }
  signout(){
    this.authService.signout()
    

  }

}
