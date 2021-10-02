import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConteudosService {
  public animesLista: Array<any> = [
    {
      id: 0,
      nome: 'Hunter x Hunter',
      descricao: '',
      imagem: './../../assets/img/clients/client-1.jpg'
    },
    {
      id: 1,
      nome: 'Jujutsu Kaisen',
      descricao: '',
      imagem: './../../assets/img/clients/client-2.jpg'
    },
    {
      id: 2,
      nome: 'One Piece',
      descricao: '',
      imagem: './../../assets/img/clients/client-3.jpg'
    },
    {
      id: 3,
      nome: 'Naruto',
      descricao: '',
      imagem: './../../assets/img/clients/client-4.jpg'
    },
    {
      id: 4,
      nome: 'the time i got reincarnated as a slime',
      descricao: '',
      imagem: './../../assets/img/clients/client-5.jpg'
    },
    {
      id: 5,
      nome: 'Overlord',
      descricao: '',
      imagem: './../../assets/img/clients/client-6.png'
    },
    {
      id: 6,
      nome: 'Gintama',
      descricao: '',
      imagem: './../../assets/img/clients/client-7.png'
    },
    {
      id: 7,
      nome: 'Bleach',
      descricao: '',
      imagem: './../../assets/img/clients/client-8.png'
    }
  ];

  constructor() { }

  public getAllAnimes() {
    return this.animesLista;
  }
}
