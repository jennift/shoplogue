import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { AddCatPage } from '../addcat/addcat';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'  
})

export class HomePage {
	
  	addcatPage = AddCatPage;
    
    @ViewChild('mySlider') slider: Slides;

    mySlideOptions = {
      pager: true
    };

  	constructor(public navCtrl: NavController) {	
    }

}