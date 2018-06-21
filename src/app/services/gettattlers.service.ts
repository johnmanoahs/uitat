import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class GettattlersService {
private url = "https://jsonplaceholder.typicode.com/users";
tattlers$;
  
  constructor(private http: Http, db: AngularFireDatabase) { 
  	//console.log('query ', db.list('/tattlers').snapshotChanges());
  	db.list('/tattlers').snapshotChanges().subscribe(tattlers =>{
  		console.log(" = ", tattlers);
  	})
  }

  getTattlers(id?){
  	
  	this.url = this.url + ( (id)? ('/'+id) : '' );
  	return this.http.get(this.url);

  	//this.db.list('/tattlers').
  }
}
