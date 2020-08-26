import {Injectable, OnInit} from '@angular/core';
import {RestService} from './rest.service';
import {Observable} from 'rxjs';

@Injectable()
export class SummonerRepository implements OnInit {

  constructor(private restService: RestService) { }

  ngOnInit() {  }

  // Observable serve component.
  getSummoner(summonerName: string): Observable<object> {
    return this.restService.getSummoner(summonerName);
  }

  getSummonerMatchHistory(summoner: object): Observable<object> {
    return this.restService.getSummonerMatchHistory(summoner);
  }

}


