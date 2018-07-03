import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GettattlersService } from '../services/gettattlers.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';


@Component({
	selector: 'app-searchresults',
	templateUrl: './searchresults.component.html',
	styleUrls: ['./searchresults.component.css']
})
export class SearchresultsComponent implements OnInit {

	today = Date.now();
	tattlers;
	tattlerRef; //:AngularFireList<any>;
	tattlers$: Observable<any>;

	constructor(private route: ActivatedRoute, 
		private tattlerservice: GettattlersService, 
		private db: AngularFireDatabase) { 

	}

	ngOnInit() {
		
		this.tattlers$ = this.db.list('/tattlers');

	}

}
