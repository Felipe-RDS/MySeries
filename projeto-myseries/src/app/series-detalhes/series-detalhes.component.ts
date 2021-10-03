import { Component, OnInit } from '@angular/core';
import { Conteudo } from './../model/conteudo.model';
import { ConteudosService } from './../services/conteudos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-series-detalhes',
  templateUrl: './series-detalhes.component.html',
  styleUrls: ['./series-detalhes.component.css']
})
export class SeriesDetalhesComponent implements OnInit {

  public seriesLista: Array<Conteudo> = [];

  public serie: Conteudo = new Conteudo();

  constructor( private seriesService: ConteudosService,
              private rotaAtiva: ActivatedRoute) { }

  ngOnInit(): void {
    const codigo: number = Number(this.rotaAtiva.snapshot.paramMap.get('id'));
    console.log(codigo);
    this.serie = this.seriesService.getIdSeries(codigo);
  }

}
