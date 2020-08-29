import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {isEmpty} from 'lodash';

import {RegionRepository} from '../model/region.repository';
import {SummonerRepository} from '../model/summoner.repository';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'summoner',
  templateUrl: './summoner.component.html'
})
export class SummonerComponent implements OnInit {
  constructor(
    private regionRepository: RegionRepository,
    private summonerRepository: SummonerRepository,
    private activeRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {

    if (this.activeRoute.snapshot.params.region) {
      if (isEmpty(this.regionRepository.allRegions)) {
        this.regionRepository.getAllRegions().then(regions => {
          this.prepareLoadPage();
        });
      } else {
        this.prepareLoadPage();
      }
    }
  }

  prepareLoadPage() {
    const regionController = this.regionRepository.allRegionTag.includes(this.activeRoute.snapshot.params.region.toUpperCase());
    if (this.activeRoute.snapshot.params.summonerName && regionController) {
      this.regionRepository.changeBaseRegion(this.activeRoute.snapshot.params.region);
      this.summonerRepository.getSummoner(this.activeRoute.snapshot.params.summonerName).then(dataSummoner => {
        console.log(dataSummoner);
        this.summonerRepository.getSummonerMatchHistory(dataSummoner).then(dataSummonerMatches => {
          this.summonerRepository.summonerDataController = true;
        });
      });
    }
  }

}
