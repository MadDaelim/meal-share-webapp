import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {SingInComponent} from './sing-in.component';
import {SingInRoutingModule} from './sing-in-routing.module';

@NgModule({
  imports: [
    SharedModule,
    SingInRoutingModule
  ],
  declarations: [
    SingInComponent
  ]
})
export class SingInModule {
}
