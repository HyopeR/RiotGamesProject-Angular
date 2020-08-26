import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './design/search/search.component';
import { SummonerComponent } from './summoner/summoner.component';

const routes: Routes = [
  {path: 'search', component: SearchComponent},
  {path: 'summoner/:region/:summonerName', component: SummonerComponent},
  {path: '**', redirectTo: 'search'}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
