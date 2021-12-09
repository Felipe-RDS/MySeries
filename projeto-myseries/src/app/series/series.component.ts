import { Component, OnInit } from '@angular/core';
import { Conteudo } from 'src/app/model/conteudo.model';
import { ConteudosService } from 'src/app/services/conteudos.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  public seriesLista: Array<Conteudo> = [];

  constructor(private seriesService: ConteudosService) { }

  ngOnInit(): void {
    this.seriesService.getAllSeries().subscribe((listaSeries: Conteudo[])=>{
      this.seriesLista = listaSeries;
    });
  }

}
