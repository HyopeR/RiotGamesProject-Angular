import {Injectable, OnInit} from '@angular/core';
import {RestService} from '../moldes/rest.service';
import {includes, isEmpty} from 'lodash';

@Injectable()
export class SpellRepository implements OnInit {

  // Spells
  public spells = {
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

  getSpells() {
    this.spells.loading = true;

    this.restService.getSpells().subscribe(itemsData => {
      if (this.requestValidCheck(itemsData)) {
        // @ts-ignore
        this.spells.data = Object.entries(itemsData.data);
        this.spells.loading = false;
        this.spells.loaded = true;
        this.spells.error = { status: false,  message: '' };
      } else {
        this.spells.error = { status: true, message: 'Summoner League Not Found.'};
      }

    });
  }

  requestValidCheck(data: object): boolean {
    // @ts-ignore
    const controller = isEmpty(data) ? false : (!(includes(data.status, 404)));
    return controller;
  }

}
