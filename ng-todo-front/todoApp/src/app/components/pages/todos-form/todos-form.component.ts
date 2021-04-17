import { TodosService } from './../../../services/todos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos-form',
  templateUrl: './todos-form.component.html',
  styleUrls: ['./todos-form.component.css']
})
export class TodosFormComponent implements OnInit {

  title :string=''
  constructor( private todosService:TodosService) { }

  ngOnInit(): void {
  }

  Add(){
    this.todosService.createTodo(this.title)
    this.title = ''
   //   document.getElementById('title').value = "";

  }
}
