import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './components/pages/signup/signup.component';
import { HomeComponent } from './components/pages/home/home.component';
import { DefaultBarComponent } from './components/bars/default-bar/default-bar.component';
import { NotfoundComponent } from './components/pages/notfound/notfound.component';
import { ActionsBarComponent } from './components/bars/actions-bar/actions-bar.component';
import { TodosFormComponent } from './components/pages/todos-form/todos-form.component';
import { UserTodoComponent } from './components/pages/user-todo/user-todo.component';
import { AlltodosComponent } from './components/pages/alltodos/alltodos.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    DefaultBarComponent,
    NotfoundComponent,
    ActionsBarComponent,
    TodosFormComponent,
    UserTodoComponent,
    AlltodosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
