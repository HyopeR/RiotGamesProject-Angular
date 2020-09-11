import { Component } from '@angular/core';
import {OtherRepository} from './repositories/other.repository';
import {ChampionRepository} from './repositories/champion.repository';
import {ItemRepository} from './repositories/item.repository';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private otherRepository: OtherRepository,
    private championRepository: ChampionRepository,
    private itemRepository: ItemRepository
  ) {
    // Get last version then get champions data.
    otherRepository.getVersions().then(() => {
      championRepository.getChampions();
      itemRepository.getItems();
    });
  }
}
