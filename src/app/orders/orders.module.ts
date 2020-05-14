import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SharedModule} from '../shared/shared.module';
import {OrdersComponent} from './orders.component';
import {OrderCreateComponent} from './create/order-create.component';
import {OrderDetailsComponent} from './details/order-details.component';
import {OrderJoinComponent} from './join/order-join.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    NgbModule,
    FontAwesomeModule,
    SharedModule
  ],
  declarations: [
    OrdersComponent,
    OrderCreateComponent,
    OrderDetailsComponent,
    OrderJoinComponent
  ],
})
export class OrdersModule {
}
