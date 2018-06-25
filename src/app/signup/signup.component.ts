import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

	form;
	culturalexperiences: any[];
	languagesspoken: any[];

	constructor(
		private fb: FormBuilder, 
		private culturalexp: AngularFireDatabase,
		private spokenlanguages: AngularFireDatabase
		) {

		this.form = fb.group({
			email: ['', 
			[Validators.required,
			Validators.email,
			Validators.minLength(3)
			]
			],
			password: ['', Validators.required]
		})

		culturalexp.list('/culturalexperience').valueChanges().subscribe(ce => {
			this.culturalexperiences = ce;
  		//console.log('ce = ', this.culturalexperiences);
  		});

  		//culturalexp.list('/culturalexperience').

  		spokenlanguages.list('/languagesspoken').valueChanges().subscribe(ls => {
  			this.languagesspoken = ls;
  		});
	}

	get email(){
		return this.form.get('email');
	}

	get password(){
		return this.form.get('password');
	}

	addrow(){
		let itm = document.getElementById('ce');
		let cln = itm.cloneNode(true);
		document.getElementById('cln').appendChild(cln);
	}

	ngOnInit() {
	}

}
