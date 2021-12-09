import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AnimesDetalhesComponent } from "./animes-detalhes/animes-detalhes.component";

import { ConteudosComponent } from "./conteudos.component";
import { ConteudoNovoComponent } from "./novo/conteudo-novo.component";
import { SeriesDetalhesComponent } from "./series-detalhes/series-detalhes.component";

const routes: Routes = [
  {
    path: '',
    component: ConteudosComponent,
    children: [
      {
        path: 'novo',
        component: ConteudoNovoComponent
      },
      {
        path: 'animes-detalhes/:id',
        component: AnimesDetalhesComponent
      },
      {
        path: 'series-detalhes/:id',
        component: SeriesDetalhesComponent
      }
    ]
  },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ConteudosRoutingModule{}

