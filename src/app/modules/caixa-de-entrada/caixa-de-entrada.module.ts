import { NgModule } from '@angular/core';
import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { FormsModule } from '@angular/forms';
import { CaixaDeEntradaRoutingModule } from './caixa-de-entrada-routing.module';
import { CommonModule } from '@angular/common';
import { EmailService } from './services/email.service';
import { CmailListItemComponent } from 'src/app/components/cmail-list-item/cmail-list-item.component';

@NgModule({
  declarations: [
    CaixaDeEntradaComponent,
    CmailListItemComponent
  ],
  exports: [CaixaDeEntradaComponent],
  imports: [
    CommonModule,
    SharedComponentsModule,
    FormsModule,
    CaixaDeEntradaRoutingModule
  ]
  ,providers: [
    EmailService
  ]
})
export class CaixaDeEntradaModule {
}
