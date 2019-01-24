import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { rotas } from "./app.routes";

@NgModule({
  imports: [
    RouterModule.forRoot(rotas)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
