import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { FileOpener} from 'ionic-native';
import { AddCatPage } from '../addcat/addcat';
import { CatViewPage } from '../catview/catview';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'  
})

export class HomePage {
	
	addcatPage = AddCatPage;
  catviewPage = CatViewPage;
  
  @ViewChild('mySlider') slider: Slides;

  mySlideOptions = {
    pager: true
  };

	constructor(public navCtrl: NavController) {	
  }

  openPdf () {
    cordova.plugins.fileOpener2.open(
      'assets/pdf/coles.pdf',
      'application/pdf', 
      {
        error : function(e) { 
          console.log('Error status: ' + e.status + ' - Error message: ' + e.message);
        },
        success : function () {
          console.log('file opened successfully');                
        }
      } 
    );
  }
    
    

    //openPDF() {
      //this.navCtrl.push(CatViewPage);
    //}

}