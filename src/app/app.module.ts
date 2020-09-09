import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SummonerModule } from './components/summoner/summoner.module';
import { DesignModule } from './components/design/design.module';
import { RepositoryModule } from './repositories/repository.module';
import { AppRoutingModule  } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/page/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    SummonerModule,
    DesignModule,
    RepositoryModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
