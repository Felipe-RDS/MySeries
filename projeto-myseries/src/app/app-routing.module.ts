import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AnimesComponent } from './animes/animes.component';
import { AnimesDetalhesComponent } from './animes-detalhes/animes-detalhes.component';
import { SeriesComponent } from './series/series.component';
import { SeriesDetalhesComponent } from './series-detalhes/series-detalhes.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'animes',
    component: AnimesComponent
  },
  {
    path: 'animes-detalhes/:id',
    component: AnimesDetalhesComponent
  },
  {
    path: 'series',
    component: SeriesComponent
  },
  {
    path: 'series-detalhes/:id',
    component: SeriesDetalhesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
