import {Injectable, OnInit} from '@angular/core';
import {RestService} from '../moldes/rest.service';
import {includes, isEmpty} from 'lodash';

@Injectable()
export class MatchRepository implements OnInit {

  // Match
  public match = {
    data: {},
    selectedMatch: {
      gameId: ''
    },
    loading: false,
    loaded: false,
    error: {
      status: false,
      message: ''
    }
  };

  constructor(private restService: RestService) {}

  ngOnInit() {}

  getMatch(match: object) {
    this.statesReset();

    // @ts-ignore
    this.match.selectedMatch = match;
    this.match.loading = true;

    this.restService.getMatch(match).subscribe(matchData => {
      if (this.requestValidCheck(matchData)) {
        this.match.data = matchData;
        this.match.loaded = true;
        this.match.error = { status: false,  message: '' };
      } else {
        this.match.error = { status: true, message: 'An error occurred while fetching data.'};
      }

      this.match.loading = false;
    });
  }

  statesReset() {
    this.match = {
      data: {},
      selectedMatch: {
        gameId: ''
      },
      loading: false,
      loaded: false,
      error: {
        status: false,
        message: ''
      }
    };
  }

  requestValidCheck(data: object): boolean {
    // @ts-ignore
    const controller = isEmpty(data) ? false : (!(Object.keys(data).includes('status')));
    return controller;
  }

}
