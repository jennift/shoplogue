import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-suggest',
  templateUrl: 'suggest.html'
})

export class SuggestPage {

	suggestForm : FormGroup;

	submitAttempt: boolean = false;
  	
	constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public navParams: NavParams) {
	
		this.suggestForm = formBuilder.group({
			country: ['', Validators.required],
			company:['', Validators.compose([Validators.minLength(1), Validators.required])],
			url: ['', Validators.compose([Validators.minLength(5), Validators.required])]
		});

	}

	submitSuggest() {

		this.submitAttempt = true;

		if(this.suggestForm.valid) {
			console.log("success");
			console.log(this.suggestForm.value);
		}
	}

}