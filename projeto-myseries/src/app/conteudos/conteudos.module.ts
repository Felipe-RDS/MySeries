import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConteudosRoutingModule } from './conteudos-routing.module';
import { ConteudosComponent } from './conteudos.component';
import { ConteudoNovoComponent } from './novo/conteudo-novo.component';
import { AnimesDetalhesComponent } from './animes-detalhes/animes-detalhes.component';
import { SeriesDetalhesComponent } from './series-detalhes/series-detalhes.component';

@NgModule({
  declarations: [
    ConteudosComponent,
    ConteudoNovoComponent,
    AnimesDetalhesComponent,
    SeriesDetalhesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ConteudosRoutingModule
  ],
  providers: []
})
export class ConteudosModule { }
