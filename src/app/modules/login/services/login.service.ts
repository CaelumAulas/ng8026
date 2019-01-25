import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  private url = 'http://localhost:3200/login';

  constructor(private http: HttpClient){}

  autenticar({email,senha}){

    let loginDto = {
      email: email,
      password: senha
    }

    return this.http
            .post(this.url, loginDto)
            .pipe(
              map(
                (response: any) => {
                  localStorage
                    .setItem('TOKEN', response.token);
                  return response
                }
              )
              ,catchError(err => {throw err})
            )

  }

}
