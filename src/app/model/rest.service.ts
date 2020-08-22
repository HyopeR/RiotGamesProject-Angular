import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Region} from './region.model';

@Injectable()
export class RestService {
  /*
    model.module.ts dosyası içerinde HttpClientModule oluşturuldu.
    Buradaysa constructor içinde kullanım için http'e aktarılıyor.
   */

  baseRegion: Region = new Region('tr1.api.riotgames.com', 'TR1');
  apiKey: string = 'RGAPI-5215304c-a2ba-4b1c-a449-11ac5808447e';

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
    return this.http.get<any>(this.baseRegion.url + 'summoner/v4/summoners/by-name/' + summonerName + '?api_key=' + this.apiKey);
  }

}
