import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fAuth:AngularFireAuth) {
  }
  signUp(email:string, userPassword:string){
    return this.fAuth.createUserWithEmailAndPassword(email, userPassword)
  }
  signIn(email:string, userPassword:string){
    return this.fAuth.signInWithEmailAndPassword(email,userPassword)

  }

}
