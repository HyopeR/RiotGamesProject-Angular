import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';

import { Region } from '../../model/region.model';
import {RegionRepository} from '../../model/region.repository';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  allRegion: object;
  allRegionTag: string[];
  baseRegion: Region ;

  summonerName: string = '';

  constructor(
    private regionRepository: RegionRepository,
    private router: Router
  ) { }

  ngOnInit() { }

  get regions(): object {
    this.baseRegion = this.regionRepository.serveBaseRegion();
    this.allRegion = this.regionRepository.serveAllRegion();
    this.allRegionTag = this.regionRepository.serveAllRegionTag();
    return this.allRegionTag;
  }

  changeBaseRegion(regionTag) {
    this.baseRegion = this.regionRepository.changeBaseRegion(regionTag);
  }

  searchSummonerName() {
    console.log(this.baseRegion.tag);
    this.router.navigateByUrl('/summoner/' + this.baseRegion.tag + '/' + this.summonerName);
  }

}
