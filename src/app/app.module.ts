import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { CmailHeaderComponent } from './components/cmail-header/cmail-header.component';
import { CaixaDeEntradaComponent } from './modules/caixa-de-entrada/caixa-de-entrada.component';
import { LoginComponent } from './modules/login/login.component';
import { CadastroComponent } from './modules/cadastro/cadastro.component';
import { ModuloRoteamento } from './app.routes';
import { CmailFormGroupComponent } from './components/cmail-form-group/cmail-form-group.component';
import { CmailFormFieldDirective } from './components/cmail-form-group/cmail-form-field.directive';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    CmailHeaderComponent,
    CaixaDeEntradaComponent,
    LoginComponent,
    CadastroComponent,
    CmailFormGroupComponent,
    CmailFormFieldDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ModuloRoteamento,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
