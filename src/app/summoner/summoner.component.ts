import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {RegionRepository} from '../model/region.repository';
import {SummonerRepository} from '../model/summoner.repository';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'summoner',
  templateUrl: './summoner.component.html'
})
export class SummonerComponent implements OnInit  {

  allRegionTag: string[];
  summoner: object;
  summonerMatches: object;

  dataComplete: boolean = false;

  constructor(
    private regionRepository: RegionRepository,
    private summonerRepository: SummonerRepository,
    private activeRoute: ActivatedRoute
  ) {

    if (this.activeRoute.snapshot.params.region) {
      this.regionRepository.getAllRegions()
        .subscribe(regions => {

          this.allRegionTag = Object.keys(regions);
          const regionController = this.allRegionTag.includes(this.activeRoute.snapshot.params.region.toUpperCase());

          if (this.activeRoute.snapshot.params.summonerName && regionController) {
            this.regionRepository.changeBaseRegion(this.activeRoute.snapshot.params.region);
            this.summonerRepository.getSummoner(this.activeRoute.snapshot.params.summonerName)
              .subscribe(dataSummoner => {
                this.summoner = dataSummoner;
                this.summonerRepository.getSummonerMatchHistory(dataSummoner).subscribe(
                  dataSummonerMatches => {
                    console.log(dataSummonerMatches);
                    this.summonerMatches = dataSummonerMatches;
                    this.dataComplete = true;
                  });
              });

          }

        });
    }

  }

  ngOnInit() {  }
}
