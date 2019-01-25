import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Component({
  selector: 'cmail-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = {
    email: '',
    senha: '',
  }

  mensagemErro

  constructor(private loginService: LoginService,
              private roteador: Router) { }

  ngOnInit() {}

  handleLogin(formLogin: NgForm){

    if (formLogin.invalid) return console.log('Formulario inválido');

    this.loginService
        .autenticar(this.login)
        .subscribe(
          () => this.roteador.navigate(['inbox'])
          ,erro => this.mensagemErro = erro
          ,function() {
            //console.log(this)
          }
        )

  }

}
