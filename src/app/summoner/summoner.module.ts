import { NgModule } from '@angular/core';
import {ModelModule} from '../model/model.module';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {SummonerComponent} from './summoner.component';
import {MatchDetailComponent} from './match-detail/match-detail.component';
import {MatchHistoryComponent} from './match-history/match-history.component';

import {RouterModule} from '@angular/router';

@NgModule({
  /*
    model.module içerisinde Product ve Category sınıflarına dair http
    işlemleri yaparak elde edilen verilerin başka dış componentler
    tarafından kullanılabilmesi için import kısmında belirtilmesi gerekir.
  */

  /*
    Export ile ShopComponentini dışarı gönderiyoruz.
   */
  imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
  declarations: [SummonerComponent, MatchDetailComponent, MatchHistoryComponent],
  exports: [SummonerComponent]
})
export class SummonerModule {}
