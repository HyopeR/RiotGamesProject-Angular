import {Injectable, OnInit} from '@angular/core';
import { Region } from './region.model';
import {RestService} from './rest.service';

@Injectable()
export class ProcessingCenterRepository implements OnInit {

  private allRegions: object = {
    BR1: 'br1.api.riotgames.com',
    EUN1: 'eun1.api.riotgames.com',
    EUW1: 'euw1.api.riotgames.com',
    JP1: 'jp1.api.riotgames.com',
    KR: 'kr.api.riotgames.com',
    LA1: 'la1.api.riotgames.com',
    LA2: 'la2.api.riotgames.com',
    NA1: 'na1.api.riotgames.com',
    OC1: 'oc1.api.riotgames.com',
    TR1: 'tr1.api.riotgames.com',
    RU: 'ru.api.riotgames.com'
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
    this.restService.getSummoner(summonerName).subscribe(
      summonerJsonData => {
        this.summoner = summonerJsonData;
        console.log(this.summoner);
      }
    );
  }

}
