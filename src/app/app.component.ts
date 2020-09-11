import { Component } from '@angular/core';
import {OtherRepository} from './repositories/other.repository';
import {ChampionRepository} from './repositories/champion.repository';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private otherRepository: OtherRepository,
    private championRepository: ChampionRepository
  ) {
    otherRepository.getVersions().then(() => {
      championRepository.getChampions();
    });
  }
}
