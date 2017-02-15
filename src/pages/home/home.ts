import { Component, ViewChild } from '@angular/core';
import { NavController, Slides} from 'ionic-angular';
import { InAppBrowser } from 'ionic-native';
import { AddCatPage } from '../addcat/addcat';
import { CatViewPage } from '../catview/catview';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'  
})

export class HomePage {

	addcatPage = AddCatPage;
  catviewPage = CatViewPage;
  settingsPage = SettingsPage;
  
  @ViewChild('mySlider') slider: Slides;

  mySlideOptions = {
    pager: true
  };

	constructor(public navCtrl: NavController) {
  }

  openPDF(url) {   
    //this.navCtrl.push(CatViewPage, {
      //thisPDF: url
    //});
  
    //opens a empty white page?? heh
    //new InAppBrowser(url, "_self", "location=no,toolbar=yes");

    //this code below downloads the pdf into your phone
    //window.open('https://manager.salefinder.com.au/uploads/pdf/COLVICMETRO180117.pdf', '_system', 'location=no,closebuttoncaption=Close,enableViewportScale=yes')
    
  }

}