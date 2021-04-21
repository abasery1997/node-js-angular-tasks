import { UnautRequiredGuard } from './guards/unaut-required.guard';
import { AutRequiredGuard } from './guards/aut-required.guard';
import { AlltodosComponent } from './components/pages/alltodos/alltodos.component';
import { TodosFormComponent } from './components/pages/todos-form/todos-form.component';
import { NotfoundComponent } from './components/pages/notfound/notfound.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent,
    canActivate: [UnautRequiredGuard]
  },
  {
    path:'signup',
    component:SignupComponent,
    canActivate: [UnautRequiredGuard]


  },
  {
    path:'form',
    component:TodosFormComponent,
    canActivate: [AutRequiredGuard],


  },
  {
    path:'alltodos',
    component:AlltodosComponent

  },
  {
    path:'**',
    component:NotfoundComponent

  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
