import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
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
import { NotfoundComponent } from './notfound/notfound.component'
//import {MatNativeDateModule} from '@angular/material';
//import {MatMomentDateModule} from '@angular/material';
//import {MatDatepickerModule} from '@angular/material/datepicker';


@NgModule({
  declarations: [
    AppComponent,
    PlotonmapComponent,
    SearchresultsComponent,
    HomeComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
    	{ path: '', component: HomeComponent },
    	{ path: 'searchresults', component: SearchresultsComponent},
    	{ path: '**', component: NotfoundComponent}
    ]),
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
