import {Component, Input, OnInit} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'match-history',
  templateUrl: './match-history.component.html',
  styleUrls: ['./match-history.component.css']
})
export class MatchHistoryComponent implements OnInit {
  @Input() visibility: boolean;
  @Input() summonerMatches: object;
  constructor() { }

  ngOnInit() {
  }

}
