import { NgModule } from '@angular/core';

// rest.service.ts içerisinde request kullanımı için http modulü eklendi.
import { HttpClientModule } from '@angular/common/http';
import {RestService} from './rest.service';
import {Region} from './region.model';
import {RegionRepository} from './region.repository';
import {SummonerRepository} from './summoner.repository';

@NgModule({
  imports: [HttpClientModule],
  providers: [RestService, Region, RegionRepository, SummonerRepository]
})
export class ModelModule {}
