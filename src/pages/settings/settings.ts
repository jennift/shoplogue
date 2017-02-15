import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegionPage } from '../region/region';
import { SuggestPage } from '../suggest/suggest';
import { SocialSharing } from 'ionic-native';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})

export class SettingsPage {

	regionPage = RegionPage;
	suggestPage = SuggestPage;
  
	constructor(public navCtrl: NavController) {
	}


	ShareNow() {
		SocialSharing.share(
			'Organize your catalogue shopping with Shoplogue',
			'Shoplogue',
			null,
			'www.google.com' //change this to my url after uploading on playstore
		);
	}
}