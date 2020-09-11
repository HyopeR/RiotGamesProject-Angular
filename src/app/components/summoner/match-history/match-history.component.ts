import {Component, Input, OnInit} from '@angular/core';
import {ChampionRepository} from '../../../repositories/champion.repository';
import {OtherRepository} from '../../../repositories/other.repository';
import {environment} from '../../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'match-history',
  templateUrl: './match-history.component.html',
  styleUrls: ['./match-history.component.css']
})
export class MatchHistoryComponent implements OnInit {
  @Input() visibility: boolean;
  @Input() summonerMatches: object;
  squareChampionBaseUrl = environment.squareChampionIconBaseUrl;

  constructor(
    private championRepository: ChampionRepository,
    private otherRepository: OtherRepository
  ) { }

  findChampionByKey(championKey: string): Array<any> {
    // @ts-ignore
    return this.championRepository.champions.data.find(champion => champion[1].key == championKey);
  }

  findSeasonById(seasonId: number): object {
    return this.otherRepository.seasons.data.find(season => season.id == seasonId);
  }

  findQueueById(queueId: number): object {
    return this.otherRepository.queues.data.find(queue => queue.queueId == queueId);
  }

  ngOnInit() {}

}
