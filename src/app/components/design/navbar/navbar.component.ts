import { Component, OnInit } from '@angular/core';
import { isEmpty } from 'lodash';

import {SummonerRepository} from '../../../repositories/summoner.repository';
import {RegionRepository} from '../../../repositories/region.repository';
import {environment} from '../../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  profileIconBaseUrl = environment.profileIconBaseUrl;

  constructor(
    private summonerRepository: SummonerRepository,
    private regionRepository: RegionRepository
  ) { }

  ngOnInit() {}

  checkEmpty(x: object): boolean {
    return !isEmpty(x);
  }

}
