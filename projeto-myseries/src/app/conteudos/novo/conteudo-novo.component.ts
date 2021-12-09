import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Conteudo } from '../../model/conteudo.model';
import { ConteudosService } from '../../services/conteudos.service';

@Component({
  selector: 'app-conteudo-novo',
  templateUrl: './conteudo-novo.component.html',
  styleUrls: ['./conteudo-novo.component.css']
})
export class ConteudoNovoComponent implements OnInit {
  public conteudo: Conteudo = new Conteudo();

  constructor(private conteudosService: ConteudosService, private rota: Router) { }

  ngOnInit(): void {
  }

  public cadastrarAnime() {

    if (this.conteudo.nome) {
      this.conteudosService.addAnimes(this.conteudo).subscribe((resposta)=>{
        console.log(resposta);

        this.rota.navigate(['/home']);
      });

    } else {
      alert('Campo novo está vazio!');
    }

  }

  public cadastrarSerie() {

    if (this.conteudo.nome) {
      this.conteudosService.addSeries(this.conteudo).subscribe((resposta)=>{
        console.log(resposta);

        this.rota.navigate(['/home']);
      });

    } else {
      alert('Campo novo está vazio!');
    }

  }

}
