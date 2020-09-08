import {Injectable, OnInit} from '@angular/core';
import { Region } from '../moldes/region.model';
import {RestService} from '../moldes/rest.service';

@Injectable()
export class RegionRepository implements OnInit {

  // Region
  public allRegions: object = {};
  public allRegionTag: string[] = [];
  public baseRegion: Region;

  public regionDataController = false;

  /*
    Component oluşmadan önce içeriklerin çekilmesi için
    asenkron veri çekme işlemleri constructorlar içinde yazılır.
   */
  constructor(private restService: RestService) {
    this.baseRegion = this.restService.getBaseRegion();
  }

  ngOnInit() {}

  // Request services.
  getAllRegions(): Promise<object> {
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
    this.baseRegion = region;
    return this.restService.changeBaseRegion(region);
  }

}
