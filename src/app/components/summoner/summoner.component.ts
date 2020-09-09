import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {isEmpty} from 'lodash';

import {RegionRepository} from '../../repositories/region.repository';
import {SummonerRepository} from '../../repositories/summoner.repository';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'summoner',
  templateUrl: './summoner.component.html'
})
export class SummonerComponent implements OnInit {
  regionTag: string;

  constructor(
    private regionRepository: RegionRepository,
    private summonerRepository: SummonerRepository,
    private activeRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    if (this.activeRoute.snapshot.params.region) {
      this.regionTag = this.activeRoute.snapshot.params.region;

      if (!this.regionRepository.regions.loaded) {
        this.regionRepository.getAllRegions().then(regions => {
          this.firstRunLoad();
        });
      }

    }
  }

  firstRunLoad() {
    const regionController = this.regionRepository.regions.tags.includes(this.regionTag.toUpperCase());
    if (this.activeRoute.snapshot.params.summonerName && regionController) {
      this.summonerRepository.summonerName = this.activeRoute.snapshot.params.summonerName;

      this.regionRepository.changeBaseRegion(this.regionTag);
      this.summonerRepository.getSummoner(this.summonerRepository.summonerName);
    }
  }

}
