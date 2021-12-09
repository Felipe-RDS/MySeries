import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConteudosModule } from './conteudos/conteudos.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AnimesComponent } from './animes/animes.component';
//import { AnimesDetalhesComponent } from './conteudos/animes-detalhes/animes-detalhes.component';
import { SeriesComponent } from './series/series.component';
//import { SeriesDetalhesComponent } from './conteudos/series-detalhes/series-detalhes.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
//import { ConteudoNovoComponent } from './conteudo-novo/conteudo-novo.component';
import { SigninComponent } from './signin/signin.component';
import { PainelComponent } from './painel/painel.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent,
    AnimesComponent,
    //AnimesDetalhesComponent,
    SeriesComponent,
    //SeriesDetalhesComponent,
    LoginComponent,
    PerfilComponent,
    //ConteudoNovoComponent,
    SigninComponent,
    PainelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ConteudosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
