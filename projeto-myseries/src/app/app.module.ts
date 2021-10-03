import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AnimesComponent } from './animes/animes.component';
import { AnimesDetalhesComponent } from './animes-detalhes/animes-detalhes.component';
import { SeriesComponent } from './series/series.component';
import { SeriesDetalhesComponent } from './series-detalhes/series-detalhes.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent,
    AnimesComponent,
    AnimesDetalhesComponent,
    SeriesComponent,
    SeriesDetalhesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
