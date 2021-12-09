import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticaService } from '../services/autentica.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private router: Router, private autentica: AutenticaService) { }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {

    console.log('Ativado!');

    if (this.autentica.isAutenticado()) {
    return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
