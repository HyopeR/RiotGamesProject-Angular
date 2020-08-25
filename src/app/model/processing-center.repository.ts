import {Injectable, OnInit} from '@angular/core';
import { Region } from './region.model';
import {RestService} from './rest.service';

@Injectable()
export class ProcessingCenterRepository implements OnInit {

  private allRegions: object = {
    BR1: 'https://br1.api.riotgames.com',
    EUN1: 'https://eun1.api.riotgames.com',
    EUW1: 'https://euw1.api.riotgames.com',
    JP1: 'https://jp1.api.riotgames.com',
    KR: 'https://kr.api.riotgames.com',
    LA1: 'https://la1.api.riotgames.com',
    LA2: 'https://la2.api.riotgames.com',
    NA1: 'https://na1.api.riotgames.com',
    OC1: 'https://oc1.api.riotgames.com',
    TR1: 'https://tr1.api.riotgames.com',
    RU: 'https://ru.api.riotgames.com'
  };
  private baseRegion: Region;
  private summoner: object;

  /*
    Component oluşmadan önce içeriklerin çekilmesi için
    asenkron veri çekme işlemleri constructorlar içinde yazılır.
   */
  constructor(private restService: RestService) {
    this.baseRegion = this.restService.getBaseRegion();
  }

  ngOnInit() {  }

  getAllRegion(): object {
    return this.allRegions;
  };

  getBaseRegion(): Region {
    return this.baseRegion;
  }

  changeBaseRegion(region: Region): Region {
    return this.restService.changeBaseRegion(region);
  }

  searchSummonerName(summonerName: string) {
    this.restService.getSummoner(summonerName)
      .subscribe(summonerJsonData => {
        this.summoner = summonerJsonData;
        console.log(this.summoner);
      }
    );
  }

}
