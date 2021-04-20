import { Router} from '@angular/router';
import { TodosService } from 'src/app/services/todos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alltodos',
  templateUrl: './alltodos.component.html',
  styleUrls: ['./alltodos.component.css']
})
export class AlltodosComponent implements OnInit {
title:string=''
  constructor(private todosService :TodosService,private router:Router  ) { }
  home = false
  ngOnInit(): void {
    this.todosService.fetchAllTodos()

    if ( this.router.url == '/'){
      this.home = true
    }

  }
  get todos(){
  return  this.todosService.alltodos
  }
  
  gohome(){
    this.router.navigateByUrl('/')
   // .then(value=>{
    //  console.log(value)
    //  this.home = value
  //  })
    //console.log(this.router.navigateByUrl('/'))
  }



}
