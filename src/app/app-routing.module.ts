import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/page/home/home.component';
import { SummonerComponent } from './components/summoner/summoner.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'summoner/:region/:summonerName', component: SummonerComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
