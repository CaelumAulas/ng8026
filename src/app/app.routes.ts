import { Routes } from "@angular/router";
import { AuthGuard } from './guards/auth.guard';

export const rotas:Routes = [
  {path: '', loadChildren: 'src/app/modules/login/login.module#LoginModule' },
  {path: 'login', loadChildren: 'src/app/modules/login/login.module#LoginModule' },
  {path: 'inbox', loadChildren: 'src/app/modules/caixa-de-entrada/caixa-de-entrada.module#CaixaDeEntradaModule', canActivate: [AuthGuard]},
  {path: 'cadastro', loadChildren: 'src/app/modules/cadastro/cadastro.module#CadastroModule' },
  {path: '**', redirectTo: ''}
]
