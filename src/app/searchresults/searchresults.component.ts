import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-searchresults',
  templateUrl: './searchresults.component.html',
  styleUrls: ['./searchresults.component.css']
})
export class SearchresultsComponent implements OnInit {

today = Date.now();

  constructor() { }

  ngOnInit() {
  }

}
