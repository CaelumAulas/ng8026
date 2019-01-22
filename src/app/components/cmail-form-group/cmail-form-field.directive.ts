import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: '[cmailFormField]'
})
export class CmailFormFieldDirective implements OnInit {

  constructor(private campo: ElementRef){}

  ngOnInit(){
    const campo = this.campo.nativeElement;
    campo.classList.add('mdl-textfield__input');

    if(campo.name){
      campo.id = campo.name;
      campo.placeholder = " ";
    }
    else{
      throw new Error("Atribute 'name' é obrigatório no campo")
    }
  }

}
