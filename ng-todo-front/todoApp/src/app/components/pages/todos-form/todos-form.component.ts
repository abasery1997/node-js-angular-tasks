import { TodosService } from './../../../services/todos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos-form',
  templateUrl: './todos-form.component.html',
  styleUrls: ['./todos-form.component.css']
})
export class TodosFormComponent implements OnInit {

  title :string=''
  id :string=''
  constructor( private todosService:TodosService) { }

  ngOnInit(): void {
    this.todosService.fetchTodos()
  }
  

  Add(){
    if(this.title.trim()){
      this.todosService.createTodo(this.title)
      this.title = ''
    }
    else{
      window.alert('write the todo title')
    }
   //   document.getElementById('title').value = "";

  }

  get todos(){
    return this.todosService.usertodos
  }
 
}
