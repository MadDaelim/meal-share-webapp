import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AuthGuardService} from './core/auth-guard-service';

const routes: Routes = [
  {path: '', redirectTo: 'orders', pathMatch: 'full'},
  {path: 'sing-in', loadChildren: () => import('./sing-in/sing-in.module').then(m => m.SingInModule)},
  {path: 'sing-up', loadChildren: () => import('./sing-up/sing-up.module').then(m => m.SingUpModule)},
  {path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule), canActivate: [AuthGuardService]},
  {path: '**', redirectTo: 'orders', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
