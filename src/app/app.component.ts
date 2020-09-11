import { Component } from '@angular/core';
import {OtherRepository} from './repositories/other.repository';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private otherRepository: OtherRepository) {
    setTimeout(() => {
      otherRepository.findQueueById(430);
    }, 2000);
  }
}
