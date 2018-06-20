import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GettattlersService } from '../services/gettattlers.service';

@Component({
	selector: 'app-searchresults',
	templateUrl: './searchresults.component.html',
	styleUrls: ['./searchresults.component.css']
})
export class SearchresultsComponent implements OnInit {

	today = Date.now();
	tattlers:any[];

	constructor(private route: ActivatedRoute, private tattlerservice: GettattlersService) { 

	}

	ngOnInit() {
		this.route.paramMap.subscribe(params => {
			console.log('params = ' + params);
		});

		this.tattlerservice.getTattlers()
			.subscribe(

				response => {
				this.tattlers = response.json();
				console.log(this.tattlers);
			}, 

				(Error: Response) => {
				alert(Error);
			})

  	// this.http.get("https://jsonplaceholder.typicode.com/users")

  }

}
