import { Component } from '@angular/core';
import { NavController, ViewController, AlertController } from 'ionic-angular';

@Component({
  templateUrl: 'region.html'
})

export class RegionPage {
  	
	countries = [
    	{ value: 'australiamoomoo', display: 'Australia', checked: true },
    	{ value: 'us', display: 'United States' },
    	{ value: 'canada', display: 'Canada' }
    	//'Australia',
    	//'United States',
    	//'Canada'
	];

	constructor(public navCtrl: NavController, public viewCtrl: ViewController, private alertCtrl: AlertController) {
	}

	dismiss() {
		this.viewCtrl.dismiss();
	}

	//presentAlert() {
	//  let alert = this.alertCtrl.create({
	//    title: 'test' +this.selected,
	//    buttons: ['Dismiss']
	//  });
	//  alert.present();
	//}

}