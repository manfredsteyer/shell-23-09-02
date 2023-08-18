import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { OKTA_CONFIG, OktaAuthModule } from '@okta/okta-angular';
import OktaAuth from '@okta/okta-auth-js';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const oktaAuth = new OktaAuth({
  issuer: 'https://dev-55133373.okta.com/oauth2/default',
  clientId: '123456789',
  redirectUri: window.location.origin + '/login/callback',
  scopes: []
});

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OktaAuthModule
  ],
  providers: [
    { provide: OKTA_CONFIG, useValue: { oktaAuth } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
