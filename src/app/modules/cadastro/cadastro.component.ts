import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from "rxjs/operators";
import { UserOutputDto } from './user.output.dto';
import { Router } from '@angular/router';
import { PageDataService } from 'src/app/services/page-data.service';

@Component({
  selector: 'cmail-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    username: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required]),
    telefone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{4}-?[0-9]{4}[0-9]?')]),
    avatar: new FormControl('', [Validators.required], this.validaImagem.bind(this))
  })

  mensagem = '';

  constructor(private httpClient: HttpClient,
              private roteador: Router,
              private pageService: PageDataService){}

  ngOnInit() {
    this.pageService.atualizarTitulo('Cadastro')
  }

  validarTodosOsCampos(form: FormGroup){
    for(let controlName in form.controls){
      let control = form.get(controlName);
      control.markAsTouched({onlySelf: true});
    }
  }

  handleCadastrarUsuario(){
    if(this.formCadastro.invalid) return this.validarTodosOsCampos(this.formCadastro);

    let dadosIngles = new UserOutputDto(this.formCadastro.value);

    this.httpClient
        .post(
          'http://localhost:3200/users'
          , dadosIngles
        )
        .subscribe(
          (resposta: any) => {
            this.mensagem = `${resposta.email} cadastrado com sucesso`;
            this.formCadastro.reset();

            setTimeout(() => {
              this.roteador.navigate([''])
            }, 2000);

          }
          , erro => console.log(erro)
        )
  }

  validaImagem(control: FormControl) {
    return  this.httpClient
                .head(control.value, {observe: 'response'})
                .pipe(
                  map(() => null) //aqui é quando
                  ,catchError(
                    (erro: HttpErrorResponse) => [{ urlValida: erro.ok, msg: erro.statusText}]
                  )
                )
  }
}
