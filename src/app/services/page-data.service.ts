import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageDataService {

  titulo = new EventEmitter<string>()

  atualizarTitulo(tituloDaPagina){
    document.querySelector('title').textContent = tituloDaPagina;
    this.titulo.emit(tituloDaPagina);
  }
}
