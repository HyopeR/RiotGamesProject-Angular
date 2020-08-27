import {Injectable, OnInit} from '@angular/core';
import { Region } from './region.model';
import {RestService} from './rest.service';
import {Observable, Subscription} from 'rxjs';

@Injectable()
export class RegionRepository implements OnInit {

  // Region
  private allRegions: object = {};
  private allRegionTag: string[] = [];
  private baseRegion: Region;

  /*
    Component oluşmadan önce içeriklerin çekilmesi için
    asenkron veri çekme işlemleri constructorlar içinde yazılır.
   */
  constructor(private restService: RestService) {
    this.baseRegion = this.restService.getBaseRegion();
  }

  ngOnInit() {}

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

  // Request services.
  getAllRegions() {
    return new Promise(resolve => {

      this.restService.getAllRegions().subscribe(allRegionsData => {
        this.allRegionTag = Object.keys(allRegionsData);
        this.allRegions = allRegionsData;
        resolve(allRegionsData);
      });

    });
  }

  changeBaseRegion(regionTag: string): Region {
    let region = new Region(this.allRegions[regionTag.toUpperCase()], regionTag.toUpperCase());
    return this.restService.changeBaseRegion(region);
  }

}
