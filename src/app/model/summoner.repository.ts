import {Injectable, OnInit} from '@angular/core';
import {RestService} from './rest.service';

@Injectable()
export class SummonerRepository implements OnInit {

  public summoner: object;
  public summonerMatches: object;

  public summonerDataController = false;

  constructor(private restService: RestService) {}
  ngOnInit() {}

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


