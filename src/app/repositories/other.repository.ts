import {Injectable, OnInit} from '@angular/core';
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

  // Maps
  public maps = {
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

    this.restService.getMaps().subscribe(queues => {
      this.maps.data = queues;
      this.maps.loaded = true;
    });
  }

  ngOnInit() {}

  getVersions() {
    return new Promise(resolve => {

      this.restService.getVersions().subscribe(versions => {
        // @ts-ignore
        this.restService.changeBaseVersion(versions[0]);
        resolve('Completed!');
      });
    });
  }

}
