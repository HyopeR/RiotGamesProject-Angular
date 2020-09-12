import { NgModule } from '@angular/core';

import {RegionRepository} from './region.repository';
import {SummonerRepository} from './summoner.repository';
import {OtherRepository} from './other.repository';
import {ChampionRepository} from './champion.repository';
import {ItemRepository} from './item.repository';
import {SpellRepository} from './spell.repository';

@NgModule({
  imports: [],
  providers: [RegionRepository, SummonerRepository, OtherRepository, ChampionRepository, ItemRepository, SpellRepository]
})
export class RepositoryModule {}
