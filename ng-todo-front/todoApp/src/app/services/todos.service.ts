import { UserService } from './user.service';
import { TODO_INTERFACE } from 'src/app/types/todos-res.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { USERTODO_INTERFACE } from 'src/app/types/usertodos-res.intrface';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  baseUrl: string = 'http://localhost:3000/todos'

  private todos: USERTODO_INTERFACE[] = []
  private alloftodos: TODO_INTERFACE[] = []
  constructor(private http: HttpClient, private userService: UserService) { }

  setheaders() {
    return {
      headers: {
        authorization: this.userService.gettoken()
      }
    }
  }


  get usertodos() {
    return this.todos.slice();
  }
  get alltodos() {
    return this.alloftodos.slice();
  }



  fetchAllTodos() {
    this.http.get<{ todos: TODO_INTERFACE[] }>(this.baseUrl)
      .subscribe(
        data => { this.alloftodos = data.todos },
        err => { 
          console.log('some thing went wrong in fetchAllTodos   error: ',err)
        }
      )
  }


  //user id thtat got from localstorage using userservice 
  fetchTodos() {
    //check if there is a user
    const userid = this.userService.getuser().id;

    this.http.get<{ todos: USERTODO_INTERFACE[] }>(`${this.baseUrl}/${userid}`, this.setheaders())
      .subscribe(
        data => { this.todos = data.todos },
        err => { 
          console.log('some thing went wrong in fetchTodos   error: ',err)

        }
      )
  }
  createTodo(title: string) {
    this.http.post<USERTODO_INTERFACE>(this.baseUrl, { title }, this.setheaders())
      .subscribe(
        data => {
          // console.log(data.title)
          // console.log(data.completed)
          // console.log(data.userid)
          console.log(data.id)
          this.todos.push(data)

        },
        err => {
          console.log('some thing went wrong in createTodo   error: ',err)
        }
      )
  }


  ubdatetodo(id: string, completed: boolean) {
    this.http.put<USERTODO_INTERFACE>(this.baseUrl, { id, completed }, this.setheaders())
      .subscribe(
        data => {
        //  console.log(data.id)
          let todo = this.todos.find((todo) => todo.id == data.id);
        //  console.log(todo!.id)
          todo!.completed = data.completed;
        },
        err => { 
          console.log('some thing went wrong in updating   error: ',err)
        }
      )


  }

   
  deletetodo(id:string){
    this.http.delete<USERTODO_INTERFACE>(`${this.baseUrl}/${id}`,  this.setheaders())
    .subscribe(
      data =>{
        let todo = this.todos.findIndex((todo) => todo.id == data.id);
        this.todos.splice(todo,1)
      },
      err=>{
        console.log('some thing went wrong in deletetodo   error: ',err)
      }
    )
  }

}
