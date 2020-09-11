import { NgModule } from '@angular/core';

import {RegionRepository} from './region.repository';
import {SummonerRepository} from './summoner.repository';
import {OtherRepository} from './other.repository';
import {ChampionRepository} from './champion.repository';
import {ItemRepository} from './item.repository';

@NgModule({
  imports: [],
  providers: [RegionRepository, SummonerRepository, OtherRepository, ChampionRepository, ItemRepository]
})
export class RepositoryModule {}
