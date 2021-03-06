import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { environment } from './../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule  } from 'angularfire2/database';
// import { AngularFirestoreModule } from 'angularfire2/firestore';
// import { AngularFireStorageModule } from 'angularfire2/storage';

import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PlotonmapComponent } from './plotonmap/plotonmap.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatInputModule, MatIconModule ,MatCheckboxModule, MatDatepicker, 
		MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SearchresultsComponent } from './searchresults/searchresults.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { LocalprofileComponent } from './localprofile/localprofile.component';

import { GettattlersService } from './services/gettattlers.service';
import { Navbar1Component } from './navbar1/navbar1.component';
import { SignupComponent } from './signup/signup.component';
import * as firebase from 'firebase/app';
import { DropZoneDirective } from './drop-zone.directive';
import { FileUploadComponent } from './file-upload/file-upload.component';
//import {MatNativeDateModule} from '@angular/material';
//import {MatMomentDateModule} from '@angular/material';
//import {MatDatepickerModule} from '@angular/material/datepicker';


@NgModule({
  declarations: [
    AppComponent,
    PlotonmapComponent,
    SearchresultsComponent,
    HomeComponent,
    NotfoundComponent,
    NavbarComponent,
    FooterComponent,
    SearchbarComponent,
    LocalprofileComponent,
    Navbar1Component,
    SignupComponent,
    DropZoneDirective,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
    	{ path: '', component: HomeComponent },
    	{ path: 'searchresults', component: SearchresultsComponent},
     
      { path: 'become-a-tattler', component: SignupComponent},
       { path: ':userid', component: LocalprofileComponent},
    	{ path: '**', component: NotfoundComponent}
    ]),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    // AngularFirestoreModule,
    // AngularFireStorageModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule
  ],
  providers: [
    GettattlersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
