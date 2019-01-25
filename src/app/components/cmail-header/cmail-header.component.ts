import { Component } from '@angular/core';
import { PageDataService } from 'src/app/services/page-data.service';

@Component({
  selector: 'cmail-header',
  templateUrl: './cmail-header.component.html',
  styleUrls: [
    'cmail-header.component.css',
    'header-search.component.css'
  ]
})
export class CmailHeaderComponent {

  _isMenuOpen = false;
  tituloDaPagina = '';

  constructor(private pageService: PageDataService){
    this.pageService
        .titulo
        .subscribe(
          novoTitulo => this.tituloDaPagina = novoTitulo
        )
  }

  ngOnInit(){
  }

  get isMenuOpen (){
    return this._isMenuOpen;
  }

  toggleMenu(){
    this._isMenuOpen = !this.isMenuOpen;
  }
}
