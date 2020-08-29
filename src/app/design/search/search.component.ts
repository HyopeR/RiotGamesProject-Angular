import { Component, OnInit } from '@angular/core';
import { isEmpty } from 'lodash';

import {RegionRepository} from '../../model/region.repository';
import {SummonerRepository} from '../../model/summoner.repository';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  summonerName: string = '';

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
    this.regionRepository.changeBaseRegion(regionTag);
  }

  searchSummoner() {
    if (isEmpty(this.summonerRepository.summoner) || this.summonerName !== this.summonerRepository.summoner['name']) {
      this.summonerRepository.summonerDataController = false;
      this.summonerRepository.getSummoner(this.summonerName).then(summonerData => {
        this.summonerRepository.getSummonerMatchHistory(summonerData).then(summonerMatchData => {
          this.summonerRepository.summonerDataController = true;
        });
      });
    }
  }

}
