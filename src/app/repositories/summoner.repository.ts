import {Injectable, OnInit} from '@angular/core';
import {RestService} from '../moldes/rest.service';
import {includes} from 'lodash';

@Injectable()
export class SummonerRepository implements OnInit {
  public summoner: object;
  public summonerMatches: object;
  public summonerLeague: object = {};

  public summonerDataController = false;
  public summonerMatchesCotroller = false;
  public summonerLeagueCotroller = false;

  public dataError: object;

  constructor(private restService: RestService) {
    this.summonerLeague['RANKED_SOLO_5x5'] = {};
    this.summonerLeague['RANKED_FLEX_SR'] = {};
  }

  ngOnInit() {
  }

  // Observable serve component.
  getSummoner(summonerName: string): Promise<object> {
    this.summoner = {};
    this.summonerMatches = {};
    this.summonerLeague['RANKED_SOLO_5x5'] = {};
    this.summonerLeague['RANKED_FLEX_SR'] = {};

    return new Promise(resolve => {

      this.restService.getSummoner(summonerName).subscribe(summonerData => {

        if (this.requestValidCheck(summonerData)) {

          this.getSummonerMatchHistory(summonerData).then(summonerMatchData => {});
          this.getSummonerLeague(summonerData).then(summonerLeagueData => {});

          this.summoner = summonerData;
          this.summonerDataController = true;
        } else {
          this.dataError = summonerData;
        }

        return resolve(summonerData);
      });
    });
  }

  getSummonerMatchHistory(summoner: object): Promise<object> {
    return new Promise(resolve => {
      this.restService.getSummonerMatchHistory(summoner).subscribe(summonerMatchData => {

        if (this.requestValidCheck(summonerMatchData)) {
          this.summonerMatches = summonerMatchData;
          this.summonerMatchesCotroller = true;
        } else {
          this.dataError = summonerMatchData;
        }

        return resolve(summonerMatchData);
      });
    });
  }

  getSummonerLeague(summoner: object): Promise<any> {
    return new Promise(resolve => {
      this.restService.getSummonerLeague(summoner).subscribe(summonerLeagueData => {

        if (this.requestValidCheck(summonerLeagueData)) {
          summonerLeagueData.forEach(league => {
            league['queueType'] === 'RANKED_SOLO_5x5'
              ? this.summonerLeague['RANKED_SOLO_5x5'] = league
              : this.summonerLeague['RANKED_FLEX_SR'] = league;
          });

          this.summonerLeagueCotroller = true;
        } else {
          this.dataError = summonerLeagueData;
        }

        return resolve(summonerLeagueData);
      });
    });
  }

  requestValidCheck(data: object): boolean {
    const controller = !(includes(data['status'], 404));
    return controller;
  }

}


