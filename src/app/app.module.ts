import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {SharedModule} from './shared/shared.module';
import {OrdersModule} from './orders/orders.module';
import {AccessModule} from './access/access.module';

@NgModule({
  imports: [
    AppRoutingModule,
    SharedModule,
    AccessModule,
    OrdersModule,
    HttpClientModule,
    NgbModule,
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
