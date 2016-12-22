import { Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import { Data } from '../../providers/data';
import { RegionPage } from '../region/region';
import { SuggestPage } from '../suggest/suggest';

@Component({
  selector: 'page-addcat',
  templateUrl: 'addcat.html'
})

export class AddCatPage {
  
  searchTerm: string = '';
  searchControl: FormControl;
  items: any;
  regionPage: RegionPage;
  suggestPage:SuggestPage;

  constructor(public navCtrl: NavController, public dataService: Data, public params: NavParams) {
  	this.searchControl = new FormControl();
  }

  //page refreshers need to sit immediately at the bottom of constructor
  doRefresh(refresher) {
  console.log('Begin async operation', refresher);

  setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
  //end refresher

  ionViewDidLoad() {
  	this.setFilteredItems();
  	this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
  		this.setFilteredItems();
  	});
  }

  setFilteredItems () {
  	this.items = this.dataService.filterItems(this.searchTerm);
  }

  openRegionPage() {
    this.navCtrl.push(RegionPage);
  }

  openSuggestPage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(SuggestPage);
  }

}