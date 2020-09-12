import {Component, Input, OnInit} from '@angular/core';
import {ChampionRepository} from '../../../repositories/champion.repository';
import {OtherRepository} from '../../../repositories/other.repository';
import {MatchRepository} from '../../../repositories/match.repository';
import {environment} from '../../../../environments/environment';
import * as moment from 'moment';

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
  showCount = 20;
  selectedIndex: number;

  constructor(
    private championRepository: ChampionRepository,
    private otherRepository: OtherRepository,
    private matchRepository: MatchRepository
  ) {}

  changeShowRate() {
    this.showCount += 20;
  }

  selectMatch(index) {
    this.selectedIndex !== index ? this.matchRepository.getMatch(this.summonerMatches['matches'][index]) : null;
    this.selectedIndex = index;
  }

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

  showMatchDate(timestamp: number): string {
    return moment(timestamp).format('DD.MM.YY h:mm A');
  }

  calculateTime(timestamp: number): string {
    let currentTime = new Date().getTime();
    let differance = moment(currentTime).diff(moment(timestamp));
    let duration = moment.duration(differance);

    // Alltakine ekleyerek dakika ve seniyeyide alabilirsin.
    // + moment.utc(ms).format(":mm:ss");
    let differanceHour = Math.floor(duration.asHours());
    let result = differanceHour < 24
      ? `${differanceHour} hours ago.`
      : `${Math.floor(differanceHour / 24)} day ${differanceHour % 24} hours ago.`;
    return result;
  }

  ngOnInit() {}

}
