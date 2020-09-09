import {Injectable, OnInit} from '@angular/core';
import {RestService} from '../moldes/rest.service';
import {includes, isEmpty} from 'lodash';

@Injectable()
export class SummonerRepository implements OnInit {
  oldSummonerName: string;
  summonerName = '';

  public summoner = {
    data: {},
    loading: false,
    loaded: false,
    error: {
      status: false,
      message: ''
    }
  };

  public summonerMatches = {
    data: {},
    loading: false,
    loaded: false,
    error: {
      status: false,
      message: ''
    }
  };

  public summonerLeague = {
    data: {
      RANKED_SOLO_5x5: {},
      RANKED_FLEX_SR: {}
    },
    loading: false,
    loaded: false,
    error: {
      status: false,
      message: ''
    }
  };

  constructor(private restService: RestService) {
  }

  ngOnInit() {
  }

  // Observable serve component.
  getSummoner(summonerName: string) {
    this.statesReset();
    this.summoner.loading = true;

    this.restService.getSummoner(summonerName).subscribe(summonerData => {
      if (this.requestValidCheck(summonerData)) {

        this.summoner.data = summonerData;
        this.summoner.loading = false;
        this.summoner.loaded = true;
        this.summoner.error = { status: false, message: ''};
        this.getSummonerMatchHistory(summonerData);
        this.getSummonerLeague(summonerData);

      } else {

        this.summoner.error = { status: true, message: 'Summoner Not Found.'};
        this.summonerMatches.error = { status: true, message: 'Summoner Matches Not Found.'};
        this.summonerLeague.error = { status: true, message: 'Summoner League Not Found.'};

      }

      this.oldSummonerName = summonerName;
    });
  }

  getSummonerMatchHistory(summoner: object) {
    this.summonerMatches.loading = true;

    this.restService.getSummonerMatchHistory(summoner).subscribe(summonerMatchData => {
      if (this.requestValidCheck(summonerMatchData)) {

        this.summonerMatches.data = summonerMatchData;
        this.summonerMatches.loading = false;
        this.summonerMatches.loaded = true;
        this.summonerMatches.error = { status: false, message: ''};

      } else {

        this.summonerMatches.error = { status: true, message: 'Summoner Matches Not Found.'};

      }
    });
  }

  getSummonerLeague(summoner: object) {
    this.restService.getSummonerLeague(summoner).subscribe(summonerLeagueData => {
      this.summonerLeague.loading = true;

      if (this.requestValidCheck(summonerLeagueData)) {

        summonerLeagueData.forEach(league => {

          league.queueType === 'RANKED_SOLO_5x5'
            ? this.summonerLeague.data.RANKED_SOLO_5x5 = league
            : this.summonerLeague.data.RANKED_FLEX_SR = league;

        });

        this.summonerLeague.loading = false;
        this.summonerLeague.loaded = true;
        this.summonerLeague.error = { status: false, message: ''};

      } else {

        this.summonerLeague.error = { status: true, message: 'Summoner League Not Found.'};

      }

    });
  }

  statesReset() {
    this.summoner = {
      data: {},
      loading: false,
      loaded: false,
      error: {
        status: false,
        message: ''
      }
    };
    this.summonerMatches = {
      data: [],
      loading: false,
      loaded: false,
      error: {
        status: false,
        message: ''
      }
    };
    this.summonerLeague = {
      data: {
        RANKED_SOLO_5x5: {},
        RANKED_FLEX_SR: {}
      },
      loading: false,
      loaded: false,
      error: {
        status: false,
        message: ''
      }
    };
  }

  requestValidCheck(data: object): boolean {
    // @ts-ignore
    const controller = isEmpty(data) ? false : (!(includes(data.status, 404)));
    console.log(data);
    console.log(controller);
    return controller;
  }

}


