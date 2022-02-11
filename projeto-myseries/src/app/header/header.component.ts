import { Component, OnInit } from '@angular/core';
import { AutenticaService } from '../services/autentica.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public mostraMenu = false;

  constructor(private auth: AutenticaService) { }

  ngOnInit(): void {
    this.auth.menuHabilitado.subscribe((msg)=>{
      this.mostraMenu = msg;
    });
  }

}
