import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AnimesComponent } from './animes/animes.component';
//import { AnimesDetalhesComponent } from './conteudos/animes-detalhes/animes-detalhes.component';
import { SeriesComponent } from './series/series.component';
//import { SeriesDetalhesComponent } from './conteudos/series-detalhes/series-detalhes.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AuthGuardService } from './guards/auth-guard.service';
//import { ConteudoNovoComponent } from './conteudo-novo/conteudo-novo.component';
import { SigninComponent } from './signin/signin.component';
import { PainelComponent } from './painel/painel.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'animes',
    component: AnimesComponent
  },
  /*
  {
    path: 'animes-detalhes/:id',
    component: AnimesDetalhesComponent
  },
  */
  {
    path: 'series',
    component: SeriesComponent
  },
  {
    path: 'painel',
    component: PainelComponent,
    canActivate: [AuthGuardService]
  },
  /*
  {
    path: 'series-detalhes/:id',
    component: SeriesDetalhesComponent
  },
  */
  /*
  {
    path: 'conteudo-novo',
    component: ConteudoNovoComponent,
    canActivate: [AuthGuardService]
  },
  */
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'perfil/:id',
    component: PerfilComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'conteudos',
    loadChildren: ()=>import('src/app/conteudos/conteudos.component').then((m)=>
    m.ConteudosComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
