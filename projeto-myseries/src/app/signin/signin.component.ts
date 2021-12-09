import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PerfilService } from '../services/perfil.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  public perfilForm!: FormGroup;


  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private perfilService: PerfilService) { }

  ngOnInit(): void {
    this.perfilForm = this.formBuilder.group({
      nome: ['', Validators.compose([ Validators.required,
                                      Validators.minLength(6),
                                      Validators.maxLength(150)])
            ],
      email: ['', Validators.compose([Validators.required, Validators.email]) ],
      senha: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      idade: ['0', Validators.compose([Validators.required, Validators.min(0)]) ],
    });
  }

  public salvar() {
    let perfil = null;

    console.log(this.perfilForm);

    console.log(this.perfilForm.value);

    if (this.perfilForm.valid) {

      perfil = {
        id: 0,
        nome: this.perfilForm.value.nome,
        email: this.perfilForm.value.email,
        senha: this.perfilForm.value.senha,
        idade: this.perfilForm.value.idade,
        foto: this.perfilForm.value.foto,
        status: this.perfilForm.value.status
      };


      this.perfilService.add( perfil ).subscribe((resposta)=>{
        console.log(resposta);

        this.router.navigate(['/login']);
      });

    } else {
      console.log('O formulário não está pronto!');
    }




  }
}
