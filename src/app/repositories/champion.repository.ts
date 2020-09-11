import {Injectable, OnInit} from '@angular/core';
import {RestService} from '../moldes/rest.service';
import {includes, isEmpty} from 'lodash';

@Injectable()
export class ChampionRepository implements OnInit {

  // Chapions
  public champions = {
    data: {},
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
        this.champions.data = championsData.data;
        this.champions.loading = false;
        this.champions.loaded = true;
        this.champions.error = { status: false,  message: '' };

      } else {
        this.champions.error = { status: true, message: 'Summoner League Not Found.'};
      }

    });
  }

  requestValidCheck(data: object): boolean {
    // @ts-ignore
    const controller = isEmpty(data) ? false : (!(includes(data.status, 404)));
    console.log(data);
    console.log(controller);
    return controller;
  }

}
