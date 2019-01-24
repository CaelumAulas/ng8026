import { NgModule } from '@angular/core';
import { CmailHeaderComponent } from './cmail-header/cmail-header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  exports: [CmailHeaderComponent],
  declarations: [
    CmailHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedComponentsModule{}
