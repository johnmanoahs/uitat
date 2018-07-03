import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { GettattlersService } from '../services/gettattlers.service';
import {  Observable } from 'rxjs';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable }  from 'angularfire2/database';
@Component({
  selector: 'app-localprofile',
  templateUrl: './localprofile.component.html',
  styleUrls: ['./localprofile.component.css']
})
export class LocalprofileComponent implements OnInit {

  userid;
  username;
  tattler$: Object;
  trips: Observable<any>;

  

  constructor(private route: ActivatedRoute, 
    //private gettattlerService: GettattlersService, 
    private db: AngularFireDatabase) {

  }

  ngOnInit() {
  	this.route.paramMap.subscribe(params => {
  		//console.log(params);
  		this.userid = params.get('userid');
  		this.username = params.get('username');
  		
      this.db.object('/tattlers/' + this.userid)
      .subscribe(tattler => {
        this.tattler$ = tattler;
//                 this.trips = this.tattler$['trips'];//this.tattler$.valueOf().trips.valueOf().children;
//                 //console.log(JSON.parse(JSON.stringify(this.trips)));
//         let arr = [];
//         for (let elem in this.tattler$) {
//    arr.push(this.tattler$[elem]);
// }
       // console.log('db obj', arr);

       this.trips = this.db.list('/tattlers').map(items => {
         console.log('items', items)
         return items
       })
       this.trips.subscribe(items => {
         console.log(items.json)
       })
       console.log(this.trips);

      })


    });


  }

}
