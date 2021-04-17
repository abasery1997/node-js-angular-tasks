import { UserService } from './user.service';
import { TODO_INTERFACE } from 'src/app/types/todos-res.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  baseUrl :string = 'http://localhost:3000/todos' 

 private todos :any[]= []
  constructor(private http:HttpClient,private userService:UserService) { }

  createTodo(title:string){
    this.http.post<TODO_INTERFACE>(`${this.baseUrl}/`,
    {
      title
    },{
      headers:{
        authorization: this.userService.gettoken()
      }
    }).subscribe(
      data =>{
        console.log(data.title)
        console.log(data.completed )
        this.todos.push(data)
       // this.todos.forEach(todo=>{console.log(todo)})
        console.log(this.todos)

      },
      err =>{
        console.log(err)
      }
    )



  }
}
