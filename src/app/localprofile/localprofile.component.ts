import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-localprofile',
  templateUrl: './localprofile.component.html',
  styleUrls: ['./localprofile.component.css']
})
export class LocalprofileComponent implements OnInit {

userid;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.paramMap.subscribe(params => {
  		//console.log(params);
  		this.userid = +params.get('userid');
  		console.log(this.userid);
  	});
  }

}
