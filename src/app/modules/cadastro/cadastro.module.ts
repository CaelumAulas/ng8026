import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { CmailFormGroupModule } from 'src/app/components/cmail-form-group/cmail-form-group.module';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { CadastroComponent } from './cadastro.component';

@NgModule({
  declarations: [CadastroComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CmailFormGroupModule,
    CadastroRoutingModule,
    SharedComponentsModule
  ],
  exports: [CadastroComponent]
})
export class CadastroModule {}
