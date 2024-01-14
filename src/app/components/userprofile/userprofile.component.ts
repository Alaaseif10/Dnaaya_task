import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  constructor(private router:Router, private route:ActivatedRoute, private userdata:DatabaseService){}
  name :string =''
  email: string =''
  phone :string =''

  ngOnInit() {
  this.route.queryParams.subscribe((param)=>{
    console.log(param)
    this.userdata.getUserById(param['data']).subscribe({
      next:(res:any) => {
        this.name= res.name
        this.email = res.mail
        this.phone = res.phone
      }
    })})
  }
  back(){
    this.router.navigateByUrl('/users')
  }





}
