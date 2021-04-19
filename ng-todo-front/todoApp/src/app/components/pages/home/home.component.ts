import { UserService } from './../../../services/user.service';
import { TodosService } from './../../../services/todos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }
  get userExist(){
    return this.userService.userExist
  }



}
