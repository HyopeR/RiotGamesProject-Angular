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
    this.restService.getSeasons().subscribe(seasons => {
      this.seasons.data = seasons;
      this.seasons.loaded = true;
      console.log(seasons);
    });

    this.restService.getQueues().subscribe(queues => {
      this.queues.data = queues;
      this.queues.loaded = true;
      console.log(queues);
    });

    this.restService.getLanguages().subscribe(languages => {
      this.languages.data = languages;
      this.languages.loaded = true;
    });
  }

  ngOnInit() {}

  findQueueById(queueId: number): object {
    console.log(this.queues.data.find(queue => queue.queueId === queueId));
    return this.queues.data.find(queue => queue.queueId === queueId);
  }

}
