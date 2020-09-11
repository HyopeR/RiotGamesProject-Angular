import {Injectable, OnInit} from '@angular/core';
import {RestService} from '../moldes/rest.service';
import {includes, isEmpty} from 'lodash';

@Injectable()
export class ItemRepository implements OnInit {

  // Items
  public items = {
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

  getItems() {
    this.items.loading = true;

    this.restService.getItems().subscribe(itemsData => {
      if (this.requestValidCheck(itemsData)) {
        // @ts-ignore
        this.items.data = Object.entries(itemsData.data);
        this.items.loading = false;
        this.items.loaded = true;
        this.items.error = { status: false,  message: '' };
      } else {
        this.items.error = { status: true, message: 'Summoner League Not Found.'};
      }

    });
  }

  requestValidCheck(data: object): boolean {
    // @ts-ignore
    const controller = isEmpty(data) ? false : (!(includes(data.status, 404)));
    return controller;
  }

}
