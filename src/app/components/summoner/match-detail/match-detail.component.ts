import {Component, Input, OnInit} from '@angular/core';
import {MatchRepository} from '../../../repositories/match.repository';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.css']
})
export class MatchDetailComponent implements OnInit {

  constructor(
    private matchRepository: MatchRepository
  ) {}

  ngOnInit() {
  }

}
