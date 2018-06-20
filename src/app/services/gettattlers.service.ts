import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class GettattlersService {
private url = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: Http) { }

  getTattlers(id?){
  	this.url = this.url + ( (id)? ('/'+id) : '' );
  	return this.http.get(this.url);
  }
}
