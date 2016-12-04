import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import { Data } from '../../providers/data';
import { RegionPage } from '../region/region';

@Component({
  selector: 'page-addcat',
  templateUrl: 'addcat.html'
})

export class AddCatPage {
  
  searchTerm: string = '';
  searchControl: FormControl;
  items: any;
  regionPage: RegionPage;

  constructor(public navCtrl: NavController, public dataService: Data, public modalCtrl: ModalController, public params: NavParams) {
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

  openModal(regionPage) {
    let modal = this.modalCtrl.create(RegionPage, regionPage);
    modal.present();
  }

}