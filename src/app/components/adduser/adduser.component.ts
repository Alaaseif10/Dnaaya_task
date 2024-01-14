import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Params, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  userform : FormGroup;
  hide: boolean = true;
  users:Params[]=[]
  uid :string = ''
  constructor( private _db:FormBuilder,private userdata:DatabaseService, private auth:AuthService,
    private router : Router, private _dialogref:MatDialogRef<AdduserComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any ){
      this.userform = this._db.group({
        name: '',
        phone:0,
        mail:'',
        password:'',
      });
      console.log(data)
    }

  ngOnInit(): void {

    this.userform.patchValue(this.data);
  }

  onsumbit(){
    if (this.data){
      this.userdata.editUser(this.data.id,this.userform.value)
      .then((val: any) => {
          alert("user updated successfuly");
          this._dialogref.close(true);
        })
      .catch((err: any) => {
          console.error(err);
        })
      }

    else{
      this.auth.signUp(this.userform.value.mail,  this.userform.value.password)
      .then((data: any) =>{
          this.uid =data.user.uid
          console.log(this.uid)
          this.userdata.addUser(this.uid,this.userform.value.name,this.userform.value.phone,
          this.userform.value.mail,this.userform.value.password )
            .then((val: any) => {
              this._dialogref.close(true);
              })
            .catch((err: any) => console.error(err))
             })

}
  }}

