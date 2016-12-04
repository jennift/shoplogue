import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ShoplistPage } from '../shoplist/shoplist';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  
	homePage = HomePage;
	shoplistPage = ShoplistPage;
	
    constructor() {
  	}
}

