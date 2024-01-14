import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private fs: AngularFirestore) { }

  addUser(id:any,Name:string, phone:number, mail:string, pass:string){
    console.log(Name,phone,mail,pass )
    return this.fs.doc('users/'+ id).set({
      name: Name,
      phone : phone,
      mail: mail,
      password: pass})
  }
  getUsers(){
     return this.fs.collection('users').snapshotChanges()
  }
  deleteUser(id:any){
    return this.fs.doc('users/'+id).delete()
  }
  editUser(id:any , data:any){
    return this.fs.doc('users/'+id).update(data)
  }
  getUserById(id:any){
    return this.fs.doc('users/'+ id).valueChanges()

  }

}
