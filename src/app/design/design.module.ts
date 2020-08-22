import { NgModule } from '@angular/core';
import {ModelModule} from '../model/model.module';
import {BrowserModule} from '@angular/platform-browser';

import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  /*
    Export ile ShopComponentini dışarı gönderiyoruz.
   */
  imports: [ModelModule, BrowserModule],
  declarations: [NavbarComponent, SearchComponent],
  exports: [NavbarComponent, SearchComponent]
})
export class DesignModule {}
