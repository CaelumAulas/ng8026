import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from './services/email.service';
import { Email } from './models/email';

@Component({
  selector: 'cmail-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styleUrls: ['./caixa-de-entrada.component.css']
})
export class CaixaDeEntradaComponent implements OnInit {

  _isNewEmailFormOpen = false;
  listaDeEmails: Email[] = [];
  email = {
    destinatario: '',
    assunto: '',
    conteudo: ''
  }

  constructor(private emailService: EmailService) { }

  ngOnInit() {
    this.emailService
        .listar()
        .subscribe(
          listaDeEmailsApi => {
            this.listaDeEmails = listaDeEmailsApi
          }
        )
  }

  get isNewEmailFormOpen() {
    return this._isNewEmailFormOpen
  }

  toggleNewEmailForm() {
    this._isNewEmailFormOpen = !this._isNewEmailFormOpen;
  }

  handleNewEmail(formEmail: NgForm) {

    if (formEmail.invalid) return;

    this.emailService
        .enviar(this.email)
        .subscribe(
          emailApi => {

            this.listaDeEmails.push(emailApi);

            this.email = {
              destinatario: '',
              assunto: '',
              conteudo: ''
            }

            formEmail.resetForm();
            this.toggleNewEmailForm();

          }
          ,error => {
            console.log(error);
          }
        )

  }

  handleRemoveEmail(emailId: string){
    this.emailService
        .deletar(emailId)
        .subscribe(
          () => {
            this.listaDeEmails = this
                                  .listaDeEmails
                                  .filter(email => email.id != emailId)
          }
        );
  }

}
