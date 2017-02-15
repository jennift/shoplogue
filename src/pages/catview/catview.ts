import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from 'ionic-native';

@Component({
  selector: 'page-catview',
  templateUrl: 'catview.html'
})

export class CatViewPage {
  	
	public urlParam:any;

	constructor(public navCtrl: NavController, public params:NavParams) {
		//this.urlParam = params.get("thisPDF");
		//console.log(this.urlParam);
		//new InAppBrowser(this.urlParam);
	}

}