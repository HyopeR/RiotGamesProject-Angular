import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ModelModule} from '../model/model.module';
import {RouterModule} from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  /*
    Export ile ShopComponentini dışarı gönderiyoruz.
   */
  imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
  declarations: [NavbarComponent, SearchComponent],
  exports: [NavbarComponent, SearchComponent]
})
export class DesignModule {}
