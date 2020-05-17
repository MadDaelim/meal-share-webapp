import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from '../shared/shared.module';
import {OrderListComponent} from './list/order-list.component';
import {OrderCreateComponent} from './create/order-create.component';
import {OrderDetailsComponent} from './details/order-details.component';
import {OrderJoinComponent} from './join/order-join.component';
import {OrdersComponent} from './orders.component';
import {OrdersRoutingModule} from './orders-routing.module';
import {TopBarComponent} from './top-bar/top-bar.component';

@NgModule({
  imports: [
    SharedModule,
    NgbModule,
    OrdersRoutingModule
  ],
  declarations: [
    OrdersComponent,
    OrderListComponent,
    OrderCreateComponent,
    OrderDetailsComponent,
    OrderJoinComponent,
    TopBarComponent
  ],
})
export class OrdersModule {
}
