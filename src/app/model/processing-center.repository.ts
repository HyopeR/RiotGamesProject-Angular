import {Injectable, OnInit} from '@angular/core';
import { Region } from './region.model';
import {RestService} from './rest.service';

@Injectable()
export class ProcessingCenterRepository implements OnInit {

  // Region
  private allRegions: object;
  private allRegionTag: string[];
  private baseRegion: Region;

  // Summoner
  private summoner: object;
  private summonerMatches: object;

  /*
    Component oluşmadan önce içeriklerin çekilmesi için
    asenkron veri çekme işlemleri constructorlar içinde yazılır.
   */
  constructor(private restService: RestService) {
    this.baseRegion = this.restService.getBaseRegion();
    this.restService.getAllRegions().subscribe(regions => {
        this.allRegions = regions;
        this.allRegionTag = Object.keys(regions);
      }
    );
  }

  ngOnInit() {  }

  // Serve component.
  serveAllRegion(): object {
    return this.allRegions;
  }

  serveAllRegionTag(): string[] {
    return this.allRegionTag;
  }

  serveBaseRegion(): Region {
    return this.baseRegion;
  }

  serveSummoner(): object {
    return this.summoner;
  }

  serveSummonerMatches(): object {
    return this.summonerMatches;
  }

  // Request services.
  changeBaseRegion(region: Region): Region {
    return this.restService.changeBaseRegion(region);
  }

  getSummoner(summonerName: string) {
    this.restService.getSummoner(summonerName)
      .subscribe(summoner => {
        this.summoner = summoner;
        this.getSummonerMatchHistory();
      });
  }

  getSummonerMatchHistory() {
    this.restService.getSummonerMatchHistory(this.summoner)
      .subscribe(summonerMatchHistory => {
        this.summonerMatches = summonerMatchHistory;

        console.log(this.summoner);
        console.log(this.summonerMatches);
      });
  }

}
