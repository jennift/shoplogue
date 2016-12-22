import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-suggest',
  templateUrl: 'suggest.html'
})

export class SuggestPage {

	suggestForm : FormGroup;

	submitAttempt: boolean = false;
  	
	constructor(public navCtrl: NavController, public formBuilder: FormBuilder) {
	
		this.suggestForm = formBuilder.group({
			//country: ['select', CountryValidator.isValid],
			country: ['', Validators.required],
			company:['', Validators.compose([Validators.minLength(1), Validators.required])],
			url: ['', Validators.compose([Validators.minLength(5), Validators.required])]
		});

	}

	save() {

		this.submitAttempt = true;

		if(this.suggestForm.valid) {
			console.log("success");
			console.log(this.suggestForm.value);
		}
	}
}