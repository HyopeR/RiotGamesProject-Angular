import {Injectable, OnInit} from '@angular/core';
import {Region} from '../moldes/region.model';
import {RestService} from '../moldes/rest.service';

@Injectable()
export class OtherRepository implements OnInit {

  // Seasons
  public seasons = {
    data: [],
    loaded: false
  };

  // Queues
  public queues = {
    data: [],
    loaded: false
  };

  // Languages
  public languages = {
    data: [],
    loaded: false
  };

  constructor(private restService: RestService) {
    this.restService.getLanguages().subscribe(languages => {
      this.languages.data = languages;
      this.languages.loaded = true;
    });

    this.restService.getSeasons().subscribe(seasons => {
      this.seasons.data = seasons;
      this.seasons.loaded = true;
    });

    this.restService.getQueues().subscribe(queues => {
      this.queues.data = queues;
      this.queues.loaded = true;
    });
  }

  ngOnInit() {}

  findSeasonById(seasonId: number): object {
    return this.seasons.data.find(season => season.id === seasonId);
  }

  findQueueById(queueId: number): object {
    return this.queues.data.find(queue => queue.queueId === queueId);
  }

}
