import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cmail-list-item',
  templateUrl: './cmail-list-item.component.html',
  styleUrls: ['./cmail-list-item.component.css']
})
export class CmailListItemComponent implements OnInit {

  @Input('email') titulo = '';
  @Input('assunto') subtitulo = '';
  @Input() conteudo = '';
  @Input() data = '';

  constructor() { }

  ngOnInit() {
  }

  handleRemoveItem(){
    console.log(this);
    console.log('apagou');
  }

}
