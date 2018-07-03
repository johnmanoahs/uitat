import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AngularFireDatabase} from 'angularfire2/database';
//import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { Tattler } from './tattler.model';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

	form;
	tattlerdblist;//: AngularFireList<any[]>;
	culturalexperiences;//: any[];
	languagesspoken: any[];
	filepath;//: Observable<any>;
	i=0;
	//tfile: File;

	constructor(
		private fb: FormBuilder, 
		private culturalexp: AngularFireDatabase,
		private spokenlanguages: AngularFireDatabase,
		private tattlerdb: AngularFireDatabase
		) {

		//this.tfile = file;

		this.form = fb.group({
			firstname: ['', Validators.required],
			lastname: ['', Validators.required],
			email: ['', 
			[Validators.required,
			Validators.email,
			Validators.minLength(3)
			]
			],
			password: ['', Validators.required],
			passwordconfirm: ['', Validators.required],
			profilepic: [this.filepath],
			address: [''],
			address2: [''],
			city: [''],
			state: [''],
			postcode: [''],
			cellphone: [''],
			altphone: [''],
			bio: [''],
			languagesspoken: [''],
			culturalexperience: ['']
		})

		tattlerdb.list('/culturalexperience').subscribe(ce => {
			this.culturalexperiences = ce;
  		console.log('ce = ', this.culturalexperiences);
  		});

  		//culturalexp.list('/culturalexperience').

  		spokenlanguages.list('/languagesspoken').subscribe(ls => {
  			this.languagesspoken = ls;
  		});
	}

	receiveFilename($event, fn){
		this.filepath = $event;
		console.log(this.filepath, fn);
	}

	shows(fn){
		console.log(fn);
		console.log(fn.filepath);
		//this.filepath = fn.filepath;
	}

	get email(){
		return this.form.get('email');
	}

	get password(){
		return this.form.get('password');
	}

	addrow(){

		// let itm = document.getElementById('ce');
		// let cln = itm.cloneNode(true);
		// let uname = 'ce'+ (++this.i);
		// cln.id = uname;
		// cln.formControlName = uname;
		// cln.name = uname;
		// document.getElementById('cln').appendChild(cln);
	}
	culture = '';
	onSubmit(){
		
		//this.form.append({ "profilepic" : this.filepath});
		let ceobj = document.getElementById('cln');
		let newobj = [];
		// for(let i=0; i<ceobj.childNodes.length; i++){
		// 	if(ceobj.childNodes[i].className == 'row'){
		// 		console.log(ceobj.childNodes[i].formControlName);
		// 		let culture = ceobj.childNodes[i];
		// 		this.culture = culture.childNodes[0].childNodes[0].value;
		// 		console.log('culture' , this.culture);
		// 		//culture = culture.getElementById('culturalexperience').value;
		// 		let cultureyears = ceobj.childNodes[i];
		// 		cultureyears = cultureyears.childNodes[1].childNodes[0].value;
		// 		//console.log(cultureyears)
		// 		newobj.push({culture: {
		// 							culturename: this.culture,
		// 							cultureyears: cultureyears
		// 		}});
				
		// 	}
		// }
		console.log(newobj);
		this.form.patchValue({
					culturalexperience: newobj
				})
		this.form.patchValue({
			profilepic: this.filepath
		})
		console.log(this.form.value);
		this.tattlerdb.list('/tattlers').push(this.form.value);
		//this.tattlerdb.list('/tattler').push(this.form);
		// const obj = this.tattlerdb.database.ref('/tattlers');
		// obj.push({
		// 	firstname: 'fn'
		// })

		//this.tattlerdblist.push(this.form);

			// firstname: this.form.firstname,
			// lastname: this.form.lastname,
			// email: this.form.email,
			// password: this.form.password,
			// passwordconfirm: this.form.passwordconfirm
		// this.tattlerdblist.push({
		// 	firstname: 'JOhn'
		// })
	}

	ngOnInit() {
		this.tattlerdblist = this.tattlerdb.list("/tattlers");
		console.log("this.tattlerdblist =", this.tattlerdblist);
	}

}
