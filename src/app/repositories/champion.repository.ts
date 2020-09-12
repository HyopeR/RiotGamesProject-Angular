import {Injectable, OnInit} from '@angular/core';
import {RestService} from '../moldes/rest.service';
import {includes, isEmpty} from 'lodash';

@Injectable()
export class ChampionRepository implements OnInit {

  // Chapions
  public champions = {
    data: [],
    loading: false,
    loaded: false,
    error: {
      status: false,
      message: ''
    }
  };

  constructor(private restService: RestService) {}

  ngOnInit() {}

  getChampions() {
    this.champions.loading = true;

    this.restService.getChampions().subscribe(championsData => {
      if (this.requestValidCheck(championsData)) {
        // @ts-ignore
        this.champions.data = Object.entries(championsData.data);
        this.champions.loaded = true;
        this.champions.error = { status: false,  message: '' };

      } else {
        this.champions.error = { status: true, message: 'An error occurred while fetching data.'};
      }

      this.champions.loading = false;
    });
  }

  requestValidCheck(data: object): boolean {
    // @ts-ignore
    const controller = isEmpty(data) ? false : (!(includes(data.status, 404)));
    return controller;
  }

}
