import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Email } from '../models/email';
import { Observable } from 'rxjs';

const env = 'http://localhost:3200'

@Injectable()
export class EmailService {

  private url = `${env}/emails/`
  private token = localStorage.getItem('TOKEN');
  private cabecalho = {
    headers: new HttpHeaders({ 'Authorization': this.token })
  };

  constructor(private http: HttpClient) {}

  enviar({destinatario, assunto, conteudo}): Observable<Email> {

    let emailDto = {
      to: destinatario,
      subject: assunto,
      content: conteudo
    }

    return this.http
                .post(this.url, emailDto, this.cabecalho)
                .pipe(
                  map(
                    (response: any) => new Email({
                          destinatario: response.to,
                          assunto: response.subject,
                          conteudo: response.content,
                          dataDeEnvio: response.created_at,
                          id: response.id
                        })
                  )
                )

  }

  listar(): Observable<Email[]> {
    return this.http
                .get(this.url, this.cabecalho)
                .pipe<Email[]>(
                  map(
                    (listaEmailsApi: any[]) => {
                        return listaEmailsApi
                                  .map(
                                    (emailApi) => new Email({
                                        destinatario: emailApi.to,
                                        assunto: emailApi.subject,
                                        conteudo: emailApi.content,
                                        dataDeEnvio: emailApi.created_at,
                                        id: emailApi.id
                                      })
                                  )}
                  )
                )

  }

  deletar(id: string){
    return this.http.delete(this.url+id, this.cabecalho)
  }

}
