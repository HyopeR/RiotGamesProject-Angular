import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ModelModule} from '../../moldes/model.module';
import {RouterModule} from '@angular/router';
import {SwappingSquaresSpinnerModule} from 'angular-epic-spinners';

import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  /*
    Export ile ShopComponentini dışarı gönderiyoruz.
   */
  imports: [ModelModule, BrowserModule, FormsModule, RouterModule, SwappingSquaresSpinnerModule],
  declarations: [SearchComponent, NavbarComponent, SpinnerComponent, ErrorComponent],
  exports: [SearchComponent, NavbarComponent, SpinnerComponent, ErrorComponent]
})
export class DesignModule {}
