import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'shopitem',
  templateUrl: 'shopitem.html'
})

export class ShopItem {
  
  constructor() {
  }

  isChecked: boolean = false;
  
  showStyle() {
    if(this.isChecked) {
      this.isChecked = false;
    } else {
      this.isChecked = true;
    } 
  }
}