import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GettattlersService {
private url = "https://jsonplaceholder.typicode.com/users";
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
  	
  	this.db.list('/tattlers').valueChanges().subscribe(tattlers => {
  		this.tattlers$ = tattlers;
  		console.log('tattlers json = ', this.tattlers$);
  	})

  	return this.tattlers$;
  	//this.db.list('/tattlers').
  }
}
