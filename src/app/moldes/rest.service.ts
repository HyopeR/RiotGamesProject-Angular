import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Region} from './region.model';
import {environment} from '../../environments/environment';

@Injectable()
export class RestService {
  /*
    model.module.ts dosyası içerinde HttpClientModule oluşturuldu.
    Buradaysa constructor içinde kullanım için http'e aktarılıyor.
   */

  baseRegion: Region = new Region('https://tr1.api.riotgames.com', 'TR1');

  constructor(
    private http: HttpClient
  ) { }

  getBaseRegion() {
    return this.baseRegion;
  }

  // Region seçimi ile base url tabanının değişikliği.
  changeBaseRegion(region: Region): Region {
    this.baseRegion = region;
    return region;
  }

  getAllRegions(): Observable<object> {
    return this.http.get<object>(environment.apiUrl + 'region');
  }

  getLanguages() {
    return this.http.get<[]>(environment.apiUrl + 'other/languages');
  }

  getSeasons() {
    return this.http.get<[]>(environment.apiUrl + 'other/seasons');
  }

  getQueues() {
    return this.http.get<[]>(environment.apiUrl + 'other/queues');
  }


  // Kullanıcı adı alarak temel bilgileri getiren GET fonksiyonu.
  getSummoner(summonerName: string): Observable<object> {
    return this.http.get<object>(environment.apiUrl + this.baseRegion.tag + '/summoner/' + summonerName);
  }

  getSummonerMatchHistory(summoner: object): Observable<object> {
    // @ts-ignore
    return this.http.get<object>(environment.apiUrl + this.baseRegion.tag + '/match/history/' + summoner.accountId);
  }

  getSummonerLeague(summoner: object): Observable<any> {
    // @ts-ignore
    return this.http.get<object>(environment.apiUrl + this.baseRegion.tag + '/league/summoner/' + summoner.id);
  }

}
