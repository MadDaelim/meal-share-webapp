import {NgModule} from '@angular/core';
import {SubmitButtonComponent} from './submit-button/submit-button.component';
import {TopBarComponent} from './top-bar/top-bar.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    FontAwesomeModule
  ],
  declarations: [
    SubmitButtonComponent,
    TopBarComponent
  ],
  exports: [
    SubmitButtonComponent,
    TopBarComponent
  ]
})
export class SharedModule {
}
