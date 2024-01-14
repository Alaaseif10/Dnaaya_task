import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { AdduserComponent } from './components/adduser/adduser.component';


const routes: Routes = [
  {path:'', component:HomeComponent,children:[
    {path:'', component:LoginComponent},
    {path:'users', component:UsersComponent},
    {path:'profile', component:UserprofileComponent},
  ]},
  { path:'**', component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
