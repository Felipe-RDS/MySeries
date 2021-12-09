import { Component, OnInit } from '@angular/core';
import { AutenticaService } from '../services/autentica.service';

import { Perfil } from './../model/perfil.model';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public perfil: Perfil = new Perfil();
  public titulo = "Bem vindo(a)!";

  constructor(private autenticaLogin: AutenticaService) { }

  ngOnInit(): void {
  }

  public fazerLogin(form:any){
    if(form.valid){
      this.autenticaLogin.login(this.perfil);
    }else{
      console.log('ainda nao esta pronto');
    }
  }


}
