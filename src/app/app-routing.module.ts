import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { rotas } from "./app.routes";
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  imports: [
    RouterModule.forRoot(rotas)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard
  ]
})
export class AppRoutingModule { }
