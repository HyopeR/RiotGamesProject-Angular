import {Injectable, OnInit} from '@angular/core';
import {Region} from '../moldes/region.model';
import {RestService} from '../moldes/rest.service';

@Injectable()
export class RegionRepository implements OnInit {

  // Region
  public regions = {
    data: {},
    tags: [],
    baseRegion: {},
    loading: false,
    loaded: false
  };

  constructor(private restService: RestService) {
    this.regions.baseRegion = this.restService.getBaseRegion();
  }

  ngOnInit() {}

  getAllRegions(): Promise<object> {
    this.regions.loading = true;

    return new Promise(resolve => {

      this.restService.getAllRegions().subscribe(regions => {
        this.regions.data = regions;
        this.regions.tags = Object.keys(regions);
        this.regions.loading = false;
        this.regions.loaded = true;

        resolve(regions);
      });
    });
  }

  changeBaseRegion(regionTag: string) {
    let newRegion = new Region(this.regions.data[regionTag.toUpperCase()], regionTag.toUpperCase());
    this.regions.baseRegion = newRegion;
    this.restService.changeBaseRegion(newRegion);
  }

}
