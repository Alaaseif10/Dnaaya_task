import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Params } from 'src/app/interfaces/params';
import { AuthService } from 'src/app/services/auth.service';
import { DatabaseService } from 'src/app/services/database.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  status='save'
  hide: boolean = true;
  users:Params[]=[]
  uid :string = ''
  Name:string='';
  phone:number= 0;
  email:string ='';
  pass:string ='';
  constructor(private auth:AuthService, private router : Router, private database: DatabaseService){}

  ngOnInit(): void {
  }
  submit(form:any){
    this.Name = form.value.fullName
    this.phone = form.value.phoneNumber
    this.email = form.value.email
    this.pass = form.value.Password

    this.auth.signUp(this.email,  this.pass )
    .then((data: any) =>{
        alert("account saved successfully :)")
        this.uid =data.user.uid
        console.log(this.uid)
        this.database.addUser(this.uid, this.Name,this.phone, this.email, this.pass)
        .then(()=>{ console.log("added to firestore")})
        .catch((err)=> console.log(err))
      })
    this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
    this.router.navigate(['']);
  })
}
}




