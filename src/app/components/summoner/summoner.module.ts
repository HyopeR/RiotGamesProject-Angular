import { NgModule } from '@angular/core';
import {ModelModule} from '../../moldes/model.module';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {DesignModule} from '../design/design.module';

import {SummonerComponent} from './summoner.component';
import {MatchDetailComponent} from './match-detail/match-detail.component';
import {MatchHistoryComponent} from './match-history/match-history.component';
import { SummonerCardComponent } from './summoner-card/summoner-card.component';
import {RepositoryModule} from '../../repositories/repository.module';
import {SwappingSquaresSpinnerModule} from 'angular-epic-spinners';

@NgModule({
  /*
    model.module içerisinde Product ve Category sınıflarına dair http
    işlemleri yaparak elde edilen verilerin başka dış componentler
    tarafından kullanılabilmesi için import kısmında belirtilmesi gerekir.
  */

  /*
    Export ile ShopComponentini dışarı gönderiyoruz.
   */
  imports: [ModelModule, RepositoryModule, DesignModule, BrowserModule, FormsModule, RouterModule, SwappingSquaresSpinnerModule],
  declarations: [SummonerComponent, MatchDetailComponent, MatchHistoryComponent, SummonerCardComponent],
  exports: [SummonerComponent]
})
export class SummonerModule {}
