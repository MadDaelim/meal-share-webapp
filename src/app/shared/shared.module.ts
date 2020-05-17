import {NgModule} from '@angular/core';
import {SubmitButtonComponent} from './submit-button/submit-button.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {UserService} from './user.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  declarations: [
    SubmitButtonComponent
  ],
  providers: [
    UserService
  ],
  exports: [
    SubmitButtonComponent,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule
  ]
})
export class SharedModule {
}
