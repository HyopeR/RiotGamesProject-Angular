import { Component, Input, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'summoner-card',
  templateUrl: './summoner-card.component.html',
  styleUrls: ['./summoner-card.component.css']
})
export class SummonerCardComponent implements OnInit {

  @Input() summoner: object = {};
  profileIconBaseUrl = environment.profileIconBaseUrl;

  constructor() { }

  ngOnInit() {  }

}
