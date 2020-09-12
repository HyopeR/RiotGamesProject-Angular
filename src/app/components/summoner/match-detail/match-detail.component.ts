import {Component, Input, OnInit} from '@angular/core';
import {MatchRepository} from '../../../repositories/match.repository';
import {environment} from '../../../../environments/environment';
import {ChampionRepository} from '../../../repositories/champion.repository';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.css']
})
export class MatchDetailComponent implements OnInit {

  profileIconBaseUrl = environment.profileIconBaseUrl;
  squareChampionBaseUrl = environment.squareChampionIconBaseUrl;


  constructor(
    private matchRepository: MatchRepository,
    private championRepository: ChampionRepository
  ) {}

  ngOnInit() {}

  findChampionByKey(championKey: string): Array<any> {
    // @ts-ignore
    return this.championRepository.champions.data.find(champion => champion[1].key == championKey);
  }

}
