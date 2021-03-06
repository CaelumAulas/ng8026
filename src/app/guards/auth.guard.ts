import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate{

  constructor(public roteador: Router){}

  canActivate(){

    if(localStorage.getItem('TOKEN') ){
      return true
    }

    this.roteador.navigate(['login'])
    return false
  }
}
