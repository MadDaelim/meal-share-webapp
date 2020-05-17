import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AuthGuardService} from './auth-guard-service';
import {AuthInterceptor} from './auth-interceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule
  ],
  providers: [
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthInterceptor
  ]
})
export class CoreModule {
}
