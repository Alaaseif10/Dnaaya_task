import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;
  error ='';

  constructor( private auth:AuthService, private router:Router){}

  signIn(data:any){
    this.auth.signIn(data.email, data.password).
    then((res)=>{
      console.log(res);
      this.router.navigateByUrl('users')
    })
    .catch((err)=> this.error ='UserEmail or Password is not Correct')

    }}
