import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Observable} from 'rxjs';
import {isEmpty} from 'lodash';

import {ActivatedRoute, Router} from '@angular/router';

import { Region } from '../../model/region.model';
import {RegionRepository} from '../../model/region.repository';
import {map, take} from 'rxjs/operators';
import {logger} from 'codelyzer/util/logger';
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

}
