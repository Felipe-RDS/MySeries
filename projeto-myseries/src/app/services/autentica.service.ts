import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Perfil } from '../model/perfil.model';

import { PerfilService } from './perfil.service';


@Injectable({
  providedIn: 'root'
})
export class AutenticaService {
  private autenticado: boolean = false;

  public menuHabilitado = new EventEmitter<boolean>();

  constructor(private router: Router,
              private perfilService: PerfilService) {}

  public login(perfilLog: Perfil) {

    console.log('login');

    this.perfilService.perfilVerifica(perfilLog).subscribe(
      (perfilAutentica: Perfil[])=>{

      const [perfil] = perfilAutentica;

      if (perfil.email) {
        this.autenticado = true;
        this.menuHabilitado.emit(true);
        this.router.navigate(['/']);
      }else{
        console.log('Login inválido!');
      }
    });
  }


  public isAutenticado(): boolean {
    return this.autenticado;
  }
}
