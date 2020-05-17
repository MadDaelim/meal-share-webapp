import {NgModule} from '@angular/core';
import {OrderListComponent} from './list/order-list.component';
import {OrderCreateComponent} from './create/order-create.component';
import {OrderDetailsComponent} from './details/order-details.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', component: OrderListComponent},
  {path: 'create', component: OrderCreateComponent},
  {path: ':orderId', component: OrderDetailsComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class OrdersRoutingModule {
}
