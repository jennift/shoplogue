import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ShoplistPage } from '../pages/shoplist/shoplist';
import { TabsPage } from '../pages/tabs/tabs';
import { AddCatPage } from '../pages/addcat/addcat';
import { RegionPage } from '../pages/region/region';

import { Data } from '../providers/data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ShoplistPage,
    TabsPage,
    AddCatPage,
    RegionPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages:'true',
      }
    )
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ShoplistPage,
    TabsPage,
    AddCatPage,
    RegionPage
  ],
  providers: [
    Data
  ]
})
export class AppModule {}