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
  sameRegion: boolean = true;

  constructor(
    private regionRepository: RegionRepository,
    private summonerRepository: SummonerRepository,
  ) {  }

  ngOnInit() {
    this.regionRepository.getAllRegions();
  }

  changeBaseRegion(regionTag) {
    this.sameRegion = false;
    this.regionRepository.changeBaseRegion(regionTag);
  }

  searchSummoner() {
    if ((
      isEmpty(this.summonerRepository.summoner.data)
        &&
      this.summonerRepository.summonerName !== this.summonerRepository.oldSummonerName
    ) || (
        this.summonerRepository.summonerName !== '' &&
        (this.summonerRepository.summonerName !== this.summonerRepository.oldSummonerName || !this.sameRegion)
      )
    ) {
      this.summonerRepository.getSummoner(this.summonerRepository.summonerName);
      this.sameRegion = true;
    }
  }

}
