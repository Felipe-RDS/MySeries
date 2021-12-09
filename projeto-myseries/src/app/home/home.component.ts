import { Component, OnInit } from '@angular/core';
import { ConteudosService } from './../services/conteudos.service';
import { Conteudo } from 'src/app/model/conteudo.model';

declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {


  //imagens animes
  public imgHxh = "./../../assets/img/clients/client-1.jpg";
  public imgJjk = "./../../assets/img/clients/client-2.jpg";
  public imgOp = "./../../assets/img/clients/client-3.jpg";
  public imgNaruto = "./../../assets/img/clients/client-4.jpg";
  public imgSlime = "./../../assets/img/clients/client-5.jpg";
  public imgOverlord = "./../../assets/img/clients/client-6.png";
  public imgGintama = "./../../assets/img/clients/client-7.png";
  public imgBleach = "./../../assets/img/clients/client-8.png";

  //imagens filmes
  public imgMand = "./../../assets/img/cliseries/cliseries-1.jpg";
  public imgWitcher = "./../../assets/img/cliseries/cliseries-2.jpg";
  public imgSthings = "./../../assets/img/cliseries/cliseries-3.jpg";
  public imgBad = "./../../assets/img/cliseries/cliseries-4.jpg";
  public imgDexter = "./../../assets/img/cliseries/cliseries-5.jpg";
  public imgLoki = "./../../assets/img/cliseries/cliseries-6.jpg";
  public imgDark = "./../../assets/img/cliseries/cliseries-7.jpg";
  public imgStarTrek = "./../../assets/img/cliseries/cliseries-8.jpg";

  public animesLista: Array<Conteudo> = [ ];
  public seriesLista: Array<Conteudo> = [ ];

  constructor(private animesService: ConteudosService,
              private seriesService: ConteudosService) { }

  ngOnInit(): void {
    this.animesService.getAllAnimes().subscribe((listaAnimes: Conteudo[])=>{
      this.animesLista = listaAnimes;
    });
    this.seriesService.getAllSeries().subscribe((listaSeries: Conteudo[])=>{
      this.seriesLista = listaSeries;
    });
  }

  ngAfterViewInit() {

      // Clients carousel (uses the Owl Carousel library)
      $(".clients-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
          0: {
            items: 2
          },
          768: {
            items: 4
          },
          900: {
            items: 6
          }
        }
      });

      // Cliseries carousel (uses the Owl Carousel library)
      $(".cliseries-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
          0: {
            items: 2
          },
          768: {
            items: 4
          },
          900: {
            items: 6
          }
        }
      });

}

}
