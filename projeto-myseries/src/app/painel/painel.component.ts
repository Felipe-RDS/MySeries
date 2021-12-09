import { Component, OnInit } from '@angular/core';
import { ConteudosService } from 'src/app/services/conteudos.service';
import { Conteudo } from 'src/app/model/conteudo.model';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  public animesLista: Conteudo[] = [];
  public seriesLista: Conteudo[] = [];

  constructor(private ConteudosService: ConteudosService) { }

  ngOnInit(): void {
    this.carregarDadosAnimes();
    this.carregarDadosSeries();
  }

  public carregarDadosAnimes() {
    this.ConteudosService.getAllAnimes().subscribe((conteudos: Conteudo[])=>{
      this.animesLista = conteudos;
    });
  }

  public carregarDadosSeries() {
    this.ConteudosService.getAllSeries().subscribe((conteudos: Conteudo[])=>{
      this.seriesLista = conteudos;
    });
  }
  /*
  public deletar(id: number) {
    this.ConteudosServ.delete(id).subscribe((resposta)=>{
      this.carregarDados();
    });
  }
  */
}
