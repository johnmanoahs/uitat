import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class GettattlersService {
private url = "https://jsonplaceholder.typicode.com/users";
tattlerRef;
tattlers$;//: Observable<any>;
  
  constructor(private http: Http, private db: AngularFireDatabase) { 
  	//console.log('query ', db.list('/tattlers').snapshotChanges());
  	// db.list('/tattlers').snapshotChanges().subscribe(tattlers =>{
  	// 	console.log(" = ", tattlers);
  	// })

  	//db.list('/tattlers').
  }

  getTattlers(id?){
  	
  	//this.url = this.url + ( (id)? ('/'+id) : '' );
    this.tattlerRef = this.db.list('/tattlers');
    this.tattlers$ = this.tattlerRef.snapshotChanges().map(changes =>{
      console.log(changes);
    })
  	
  	// this.db.list('/tattlers').valueChanges().subscribe(tattlers => {
     
  	// 	this.tattlers$ = tattlers;

  	// 	console.log('tattlers json = ', this.tattlers$);
  	// })

  	// return this.tattlers$;
  	//this.db.list('/tattlers').
  }
}
