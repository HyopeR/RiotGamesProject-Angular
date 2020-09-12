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
  baseLanguage: string = 'tr_TR';
  baseVersion: string;

  constructor(
    private http: HttpClient
  ) { }

  // About started project get functions.
  getBaseRegion = () => this.baseRegion;

  // Region seçimi ile base url tabanının değişikliği.
  changeBaseRegion(region: Region) {
    this.baseRegion = region;
  }

  changeBaseVersion(version: string) {
    this.baseVersion = version;
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

  getMaps() {
    return this.http.get<[]>(environment.apiUrl + 'other/maps');
  }

  getVersions() {
    return this.http.get<[]>(environment.apiUrl + 'other/versions');
  }

  getChampions() {
    return this.http.get<object>(environment.apiUrl + this.baseRegion.tag + '/champion/' + this.baseVersion + '/' + this.baseLanguage);
  }

  getItems() {
    return this.http.get<object>(environment.apiUrl + this.baseRegion.tag + '/item/' + this.baseVersion + '/' + this.baseLanguage);
  }

  getSpells() {
    return this.http.get<object>(environment.apiUrl + this.baseRegion.tag + '/spell/' + this.baseVersion + '/' + this.baseLanguage);
  }



  // Summoner About.
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

  getMatch(match: object): Observable<any> {
    // @ts-ignore
    return this.http.get<object>(environment.apiUrl + this.baseRegion.tag + '/match/detail/' + match.gameId);
  }

}
