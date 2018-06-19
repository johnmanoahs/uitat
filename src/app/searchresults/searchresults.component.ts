import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-searchresults',
  templateUrl: './searchresults.component.html',
  styleUrls: ['./searchresults.component.css']
})
export class SearchresultsComponent implements OnInit {

today = Date.now();

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.paramMap.subscribe(params => {
  		console.log(params);
  	});
  }

}
