import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ModelModule} from '../../moldes/model.module';
import {RouterModule} from '@angular/router';

import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  /*
    Export ile ShopComponentini dışarı gönderiyoruz.
   */
  imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
  declarations: [SearchComponent, NavbarComponent, HomeComponent],
  exports: [SearchComponent, NavbarComponent, HomeComponent]
})
export class DesignModule {}
