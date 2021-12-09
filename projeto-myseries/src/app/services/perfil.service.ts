import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Perfil } from './../model/perfil.model';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PerfilService {



  constructor(private http: HttpClient) { }

  public perfilVerifica (perfil: Perfil): Observable<Perfil[]>{
    return this.http.get<Perfil[]>('http://localhost:3000/perfis?email='+perfil.email+'&senha='+perfil.senha);
  }

  public add(perfil: Perfil): Observable<any> {
    const perfilJSON = JSON.stringify(perfil);

    return this.http.post<Perfil>('http://localhost:3000/perfis', perfilJSON, httpOptions);
  }
}
