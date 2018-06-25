import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { Observable } from 'rxjs';
// import  {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {MatButtonModule, MatCheckboxModule} from '@angular/material';
// import {MatNativeDateModule} from '@angular/material';
// import {MatDatepickerModule} from '@angular/material/datepicker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
  	trigger('fade', [
  		
  		state('void', style({
  			'transform': 'translateX(-100px)'
  		})),

  		transition(':enter, :leave', [
  			animate(5000)
  		])
  ]),

  	trigger('headerShrink', [
  		state('void', style({
  			'flex-basis': '30px' 
  		})),

  		transition(':leave', [
  			animate(2000)
  		])
  	]),

  	trigger('searchTransform', [
  		state('collapsed', style({
  			'width': '100%',
  			'padding': '5px',
  			'box-shadow': '0px',
  			'margin': '0px'
  		})),

  		transition(':leave', [
  			animate(2000)
  		])
  	])
  ]
})

export class AppComponent {

 
  


}







