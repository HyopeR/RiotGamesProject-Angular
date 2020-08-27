import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SummonerModule } from './summoner/summoner.module';
import { DesignModule } from './design/design.module';
import { AppRoutingModule  } from './app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SummonerModule,
    DesignModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
