import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-shoplist',
  templateUrl: 'shoplist.html'
})

export class ShoplistPage {

	settingsPage = SettingsPage;
  
	constructor(public navCtrl: NavController) {
	}
	
}