import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  _isNewEmailFormOpen = false;
  listaDeEmails = [];
  email = {
    destinatario: '',
    assunto: '',
    conteudo: ''
  }

  get isNewEmailFormOpen() {
    return this._isNewEmailFormOpen
  }

  toggleNewEmailForm(){
    this._isNewEmailFormOpen = !this._isNewEmailFormOpen;
  }

  handleNewEmail(evento: Event){
    evento.preventDefault();

    this.listaDeEmails.push(this.email);
    this.email = {
      destinatario: '',
      assunto: '',
      conteudo: ''
    }
  }
}
