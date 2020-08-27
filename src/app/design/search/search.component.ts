import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { Region } from '../../model/region.model';
import {RegionRepository} from '../../model/region.repository';
import {SummonerRepository} from '../../model/summoner.repository';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  allRegion: object;
  allRegionTag: string[];
  baseRegion: Region;

  summonerName: string = '';

  dataComplete: boolean = false;

  constructor(
    private regionRepository: RegionRepository,
    private summonerRepository: SummonerRepository,
    private router: Router
  ) {  }

  ngOnInit() {
    this.baseRegion = this.regionRepository.serveBaseRegion();
    this.regionRepository.getAllRegions().then(regions => {
      this.allRegion = regions;
      this.allRegionTag = this.regionRepository.serveAllRegionTag();
      this.dataComplete = true;
    });
  }

  changeBaseRegion(regionTag) {
    this.baseRegion = this.regionRepository.changeBaseRegion(regionTag);
  }

  searchSummoner() {
    this.summonerRepository.getSummoner(this.summonerName).then(summonerData => {
      this.summonerRepository.getSummonerMatchHistory(summonerData).then(summonerMatchData => {
        console.log(summonerData);
      });
    });
  }

}
