import { Component, OnInit } from '@angular/core';
import {ProcessingCenterRepository} from '../model/processing-center.repository';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'summoner',
  templateUrl: './summoner.component.html'
})
export class SummonerComponent implements OnInit {

  summoner: object;
  summonerMatches: object;

  constructor(
    private processingCenterRepository: ProcessingCenterRepository
  ) {  }

  ngOnInit() {  }

  get summonerData(): object {;
    this.summoner = this.processingCenterRepository.serveSummoner();
    return this.summoner;
  }

  get summonerMatchesData(): object {
    this.summonerMatches = this.processingCenterRepository.serveSummonerMatches();
    return this.summonerMatches;
  }

}
