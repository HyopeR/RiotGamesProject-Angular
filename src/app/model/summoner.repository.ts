import {Injectable, OnInit} from '@angular/core';
import {RestService} from './rest.service';
import {Observable} from 'rxjs';

@Injectable()
export class SummonerRepository implements OnInit {

  summoner: object;
  summonerMatches: object;

  constructor(private restService: RestService) {}
  ngOnInit() {}

  // Serve summoner.
  serveSummoner(): object {
    return this.summoner;
  }

  serveSummonerMatches(): object {
    return this.summonerMatches;
  }

  // Observable serve component.
  getSummoner(summonerName: string): Promise<object> {
    return new Promise(resolve => {

      this.restService.getSummoner(summonerName).subscribe(summonerData => {
        this.summoner = summonerData;
        return resolve(summonerData);
      });

    });
  }

  getSummonerMatchHistory(summoner: object): Promise<object> {
    return new Promise(resolve => {

      this.restService.getSummonerMatchHistory(summoner).subscribe(summonerMatchesData => {
        this.summonerMatches = summonerMatchesData;
        return resolve(summonerMatchesData);
      });

    });
  }

}


