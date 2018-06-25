import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GettattlersService } from '../services/gettattlers.service';
import {  Observable } from 'rxjs';
import { AngularFireDatabase }  from 'angularfire2/database';
@Component({
  selector: 'app-localprofile',
  templateUrl: './localprofile.component.html',
  styleUrls: ['./localprofile.component.css']
})
export class LocalprofileComponent implements OnInit {

  userid;
  username;
  name;

  tattlers; //: Observable<any[]>;
  t;

  

  constructor(private route: ActivatedRoute, private gettattlerService: GettattlersService, private db: AngularFireDatabase) {

    this.tattlers = db.list('tattlers').valueChanges();
    console.log("arrays = ", this.tattlers);
  }

  ngOnInit() {
  	this.route.paramMap.subscribe(params => {
  		//console.log(params);
  		this.userid = +params.get('userid');
  		this.username = params.get('username');
  		console.log(this.userid);
  	});

    this.db.list('/tattlers').valueChanges().subscribe(tattlers => {
      this.tattlers = tattlers;
    })

  	// this.gettattlerService.getTattlers(this.userid)
   //  .subscribe(tattlerprofile => {
   //    let tp = tattlerprofile;
   //    console.log(tp);
   //    //this.name = tp.(this.userid).name;
   //  });



  }

}
