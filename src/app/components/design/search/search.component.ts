import { Component, OnInit } from '@angular/core';
import { isEmpty } from 'lodash';

import {RegionRepository} from '../../../repositories/region.repository';
import {SummonerRepository} from '../../../repositories/summoner.repository';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  summonerName: string = '';

  sameRegion: boolean = true;

  constructor(
    private regionRepository: RegionRepository,
    private summonerRepository: SummonerRepository,
  ) {  }

  ngOnInit() {
    this.regionRepository.getAllRegions().then(regions => {
      this.regionRepository.regionDataController = true;
    });
  }

  changeBaseRegion(regionTag) {
    this.sameRegion = false;
    this.regionRepository.changeBaseRegion(regionTag);
  }

  searchSummoner() {
    if (isEmpty(this.summonerRepository.summoner) || this.summonerName !== this.summonerRepository.summoner['name'] || !this.sameRegion) {
      this.summonerRepository.summonerDataController = false;
      this.summonerRepository.summonerLeagueCotroller = false;
      this.summonerRepository.summonerMatchesCotroller = false;

      this.summonerRepository.getSummoner(this.summonerName).then(dataSummoner => {
        this.sameRegion = true;
      });
    }
  }

}
