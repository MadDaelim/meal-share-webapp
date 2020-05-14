import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {OrdersComponent} from './orders/orders.component';
import {AuthGuardService} from './core/auth-guard-service';
import {OrderCreateComponent} from './orders/create/order-create.component';
import {OrderDetailsComponent} from './orders/details/order-details.component';
import {SingInComponent} from './access/sing-in/sing-in.component';
import {SingUpComponent} from './access/sing-up/sing-up.component';

const routes: Routes = [
  {path: '', redirectTo: 'orders', pathMatch: 'full'},
  {path: 'sing-in', component: SingInComponent},
  {path: 'sing-up', component: SingUpComponent},
  {path: 'orders', component: OrdersComponent, canActivate: [AuthGuardService]},
  {path: 'orders/create', component: OrderCreateComponent, canActivate: [AuthGuardService]},
  {path: 'orders/:orderId', component: OrderDetailsComponent, canActivate: [AuthGuardService]},
  {path: '**', redirectTo: 'orders', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
