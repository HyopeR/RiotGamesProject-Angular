import { Component, OnInit } from '@angular/core';
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

  baseRegion: Region;
  summonerName: string = '';

  constructor(private processingCenterRepository: ProcessingCenterRepository) {
    this.baseRegion = this.processingCenterRepository.getBaseRegion();
    this.allRegion = this.processingCenterRepository.getAllRegion();
    this.allRegionTag = Object.keys(this.allRegion);
  }

  ngOnInit() { }

  searchSummonerName(inputSummonerName: string) {
    this.summonerName = inputSummonerName;
    this.processingCenterRepository.searchSummonerName(inputSummonerName);
  }

  changeBaseRegion(regionTag) {
    let newRegion = new Region(this.allRegion[regionTag], regionTag);
    this.baseRegion = this.processingCenterRepository.changeBaseRegion(newRegion);
  }

}
