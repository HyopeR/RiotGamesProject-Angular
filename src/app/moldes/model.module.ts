import { NgModule } from '@angular/core';

// rest.service.ts içerisinde request kullanımı için http modulü eklendi.
import { HttpClientModule } from '@angular/common/http';
import {RestService} from './rest.service';
import {Region} from './region.model';

@NgModule({
  imports: [HttpClientModule],
  providers: [RestService, Region]
})

export class ModelModule {}
