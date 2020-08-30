import { Component, Input, OnInit } from '@angular/core';
import {isEmpty} from 'lodash';
import {environment} from '../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'summoner-card',
  templateUrl: './summoner-card.component.html',
  styleUrls: ['./summoner-card.component.css']
})
export class SummonerCardComponent implements OnInit {

  @Input() summoner: object = {};
  @Input() summonerLeague: object = {};
  profileIconBaseUrl = environment.profileIconBaseUrl;

  constructor() { }
  ngOnInit() {  }

  emptyController(objectElement: object): boolean {
    return isEmpty(objectElement);
  }

}
