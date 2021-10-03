import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Conteudo } from './../model/conteudo.model';
import { ConteudosService } from '../services/conteudos.service';


@Component({
  selector: 'app-animes-detalhes',
  templateUrl: './animes-detalhes.component.html',
  styleUrls: ['./animes-detalhes.component.css']
})
export class AnimesDetalhesComponent implements OnInit {

  public animesLista: Array<Conteudo> = [ ];

  public anime: Conteudo = new Conteudo();

  constructor(private rotaAtiva: ActivatedRoute,
              private animesService: ConteudosService) { }

  ngOnInit(): void {
    const codigo: number = Number(this.rotaAtiva.snapshot.paramMap.get('id'));
    console.log(codigo);

    this.anime = this.animesService.getIdAnimes(codigo);
  }

}
