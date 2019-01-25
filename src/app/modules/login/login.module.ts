import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { LoginRoutingModule } from './login-routing.module';
import { CmailFormGroupModule } from 'src/app/components/cmail-form-group/cmail-form-group.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginService } from './services/login.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule,
    CmailFormGroupModule
  ],
  exports: [LoginComponent],
  providers: [
    LoginService
  ]
})
export class LoginModule {
}
