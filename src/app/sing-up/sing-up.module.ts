import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {SingUpRoutingModule} from './sing-up-routing.module';
import {SingUpComponent} from './sing-up.component';

@NgModule({
  imports: [
    SharedModule,
    SingUpRoutingModule
  ],
  declarations: [
    SingUpComponent
  ]
})
export class SingUpModule {
}
