import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { trigger, transition, style, animate, state } from '@angular/animations';
// import  {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {MatButtonModule, MatCheckboxModule} from '@angular/material';
// import {MatNativeDateModule} from '@angular/material';
// import {MatDatepickerModule} from '@angular/material/datepicker';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  //host: {class: 'homeClass'},
  styleUrls: ['./home.component.css'],
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
export class HomeComponent{
  title = 'app';
  display = 'none';
  resultState = 'none';
  captionState = '';
  flexbasis = '100px';
  searchbarWidth = '90%';
  menuState = true;

@ViewChild('bgvideo') bgvideo: any;


  tSearch(){
  	if(this.resultState == 'none'){
  		this.resultState = 'flex';
  		this.captionState = 'none';
  		
  	}
  	else{
  		this.resultState = 'none';
  	}
  	this.flexbasis = '30px';
  	this.searchbarWidth = '100%';
  }

  showMenu(){
  	this.menuState = !this.menuState;
  }

  ngOnInit(){
    this.bgvideo.nativeElement.play();
    document.getElementById('bgvid').onplay = function(){
      console.log('playing');
    }
  }

  OnDestroy(){
    this.bgvideo.nativeElement.play();
  }

}
