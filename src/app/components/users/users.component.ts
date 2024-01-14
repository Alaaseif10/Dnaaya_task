import {  Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DatabaseService } from 'src/app/services/database.service';
import { Params } from 'src/app/interfaces/params';
import {  Subscription } from 'rxjs';
import { AdduserComponent } from '../adduser/adduser.component';
import {  Router } from '@angular/router';




@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit , OnDestroy  {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort ;
  displayedColumns: string[] = [ 'Name', 'Phone Number', 'Email Address','Options'];
  dataSource!: MatTableDataSource<any>;
  obser!:Subscription
  users :Params[]=[]
  isLoadingResults = true;
  isRateLimitReached = false;
  constructor(private _dialog: MatDialog, private router:Router, private _usersdata:DatabaseService){}


  ngOnInit(): void {
    this.showData()

  }

  ngOnDestroy(): void {
    this.obser.unsubscribe()
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(){
  const dialogRef = this._dialog.open(AdduserComponent)
  dialogRef.afterClosed().subscribe((res)=>{this.showData()})
  }

  showData(){
    this.obser =this._usersdata.getUsers().subscribe({
    next:(rec:any) =>{
     this.users= rec.map((element: { payload: { doc: { id: any; data: () => any; }; }; }) =>{
        return{
          id : element.payload.doc.id,
          ...element.payload.doc.data()
        }})
    this.dataSource = new MatTableDataSource(this.users);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

  }})}

  deleteUser(id:any){
  this._usersdata.deleteUser(id)
  .then((rec)=>{
    alert('user delete successfully')
    this.showData()
  })
  .catch((err)=> alert(err) )
  }

  editUserData(data:any){

  const dialogRef= this._dialog.open(AdduserComponent,{
  data,
  });
  dialogRef.afterClosed().subscribe({
  next: (val) => {
   if (val) {
     this.showData();
   }}
  })}

  userProfile(id:any){
    this.router.navigate(['/profile'],{
      queryParams:{data:id}
    })}
 }


