import { USERTODO_INTERFACE } from 'src/app/types/usertodos-res.intrface';
import { TodosService } from './../../../services/todos.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-todo',
  templateUrl: './user-todo.component.html',
  styleUrls: ['./user-todo.component.css']
})
export class UserTodoComponent implements OnInit {
  @Input()todo:USERTODO_INTERFACE|any
    constructor( private todosService:TodosService) { }
  title :string = ''
  //completed :boolean =false;
  ngOnInit(): void {
    
  }
  
  get completed(){
    return this.todo.completed
  }
  ubdating(){
    //const completed = !this.todo.completed
    this.todosService.ubdatetodo(this.todo.id,!this.completed)
    //console.log(this.todo.id)
    //console.log(this.todo.completed)
  }
  remove(){
    this.todosService.deletetodo(this.todo.id)
    //console.log("todo remover")
  }

}
