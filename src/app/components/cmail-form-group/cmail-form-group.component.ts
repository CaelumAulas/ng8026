import { Component, OnInit, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'cmail-form-group',
  templateUrl: './cmail-form-group.component.html',
  styleUrls: ['./cmail-form-group.component.css']
})
export class CmailFormGroupComponent implements OnInit {

  campoId = '';
  label = '';
  @Input() control;

  constructor(private componente: ElementRef) { }

  ngOnInit() {
    const campo = this.componente.nativeElement.querySelector('[cmailFormField]');

    if(campo.name) {
      this.campoId = campo.name;
      this.label = campo.name.replace(campo.name[0], campo.name[0].toUpperCase())
    }
    else {
      this.label = "Informe um atributo name para este campo!"
      campo.name = " "
    }

  }

}
