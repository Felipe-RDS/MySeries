import { Component, OnInit } from '@angular/core';
import { Conteudo } from 'src/app/model/conteudo.model';
import { ConteudosService } from 'src/app/services/conteudos.service';

@Component({
  selector: 'app-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.css']
})
export class AnimesComponent implements OnInit {

  public animesLista: Array<Conteudo> = [];

  constructor(private animesService: ConteudosService) { }

  ngOnInit(): void {
    this.animesService.getAllAnimes().subscribe((listaAnimes: Conteudo[])=>{
      this.animesLista = listaAnimes;
    });
  }

}
