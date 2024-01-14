import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { SignupComponent } from './components/signup/signup.component';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Firestore, enableIndexedDbPersistence } from '@angular/fire/firestore/firebase';
import { AngularFireModule } from "@angular/fire/compat";
import { FirestoreModule } from '@angular/fire/firestore'
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AdduserComponent } from './components/adduser/adduser.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    UserprofileComponent,
    HomeComponent,
    SignupComponent,
    AdduserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAH4XEMGxREtEPC-iSL-_EFw7Gi8a3Xy5I",
      authDomain: "fir-d3f8f.firebaseapp.com",
      projectId: "fir-d3f8f",
      storageBucket: "fir-d3f8f.appspot.com",
      messagingSenderId: "532163494053",
      appId: "1:532163494053:web:5b1738b0164552f3168d4c"
    }),
    FirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
function connectEmulator(firestore: Firestore, arg1: string, arg2: number) {
  throw new Error('Function not implemented.');
}

function provideStorage(arg0: () => Storage): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

