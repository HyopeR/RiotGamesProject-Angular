import { NgModule } from '@angular/core';

// rest.service.ts içerisinde request kullanımı için http modulü eklendi.
import { HttpClientModule } from '@angular/common/http';
import {RestService} from './rest.service';
import {Region} from './region.model';
import {ProcessingCenterRepository} from './processing-center.repository';

@NgModule({
  imports: [HttpClientModule],
  providers: [RestService, Region, ProcessingCenterRepository]
})
export class ModelModule {}
