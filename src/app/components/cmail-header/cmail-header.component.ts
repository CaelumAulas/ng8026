import { Component } from '@angular/core';

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

  get isMenuOpen (){
    return this._isMenuOpen;
  }

  toggleMenu(){
    this._isMenuOpen = !this.isMenuOpen;
  }
}
