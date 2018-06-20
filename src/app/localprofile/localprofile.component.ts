import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GettattlersService } from '../services/gettattlers.service';

@Component({
  selector: 'app-localprofile',
  templateUrl: './localprofile.component.html',
  styleUrls: ['./localprofile.component.css']
})
export class LocalprofileComponent implements OnInit {

userid;
username;
name;

  constructor(private route: ActivatedRoute, private gettattlerService: GettattlersService) { }

  ngOnInit() {
  	this.route.paramMap.subscribe(params => {
  		//console.log(params);
  		this.userid = +params.get('userid');
  		this.username = params.get('username');
  		console.log(this.userid);
  	});

  	this.gettattlerService.getTattlers(this.userid)
  	 .subscribe(tattlerprofile => {
  	 	let tp = tattlerprofile.json()
  	 	console.log(tp);
  	 	this.name = tp.name;
  	 })

  }

}
