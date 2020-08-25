import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, from} from 'rxjs';

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

  // Kullanıcı adı alarak temel bilgileri getiren GET fonksiyonu.
  getSummoner(summonerName: string): Observable<object> {

    const data = {
      url: this.baseRegion.url + '/lol/summoner/v4/summoners/by-name/' + summonerName
    };

    return this.http.post<object>(environment.apiUrl + '/summoner', data);
  }

}
