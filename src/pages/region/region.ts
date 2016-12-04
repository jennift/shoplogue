import { Component } from '@angular/core';
import { NavController, ViewController, AlertController } from 'ionic-angular';
import { Country } from '../../providers/datacountry';

@Component({
  templateUrl: 'region.html'
})

export class RegionPage {
  	
	selected:any;

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

	onNotify($event) {
    	this.selected = $event.target.value; 
    	console.log(this.selected);
  	}

}