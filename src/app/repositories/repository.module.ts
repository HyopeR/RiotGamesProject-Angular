import { NgModule } from '@angular/core';

import {RegionRepository} from './region.repository';
import {SummonerRepository} from './summoner.repository';

@NgModule({
  imports: [],
  providers: [RegionRepository, SummonerRepository]
})
export class RepositoryModule {}
