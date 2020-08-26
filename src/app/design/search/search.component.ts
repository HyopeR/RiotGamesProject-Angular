import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';

import { Region } from '../../model/region.model';
import {ProcessingCenterRepository} from '../../model/processing-center.repository';

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
    private processingCenterRepository: ProcessingCenterRepository,
    private router: Router
  ) { }

  ngOnInit() { }

  get regions(): object {
    this.baseRegion = this.processingCenterRepository.serveBaseRegion();
    this.allRegion = this.processingCenterRepository.serveAllRegion();
    this.allRegionTag = this.processingCenterRepository.serveAllRegionTag();
    return this.allRegionTag;
  }

  changeBaseRegion(regionTag) {
    let newRegion = new Region(this.allRegion[regionTag], regionTag);
    this.baseRegion = this.processingCenterRepository.changeBaseRegion(newRegion);
  }

  searchSummonerName() {
    this.processingCenterRepository.getSummoner(this.summonerName);
    this.router.navigateByUrl('/summoner');
  }

}
