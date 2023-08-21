import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { LoggingService } from '@shared/services';

import { AgActionComponent } from '@shared/components/ag-grid/ag-action/ag-action.component';
import { AgLoadingComponent } from '@shared/components/ag-grid/ag-loading/ag-loading.component';
import { ShProgressComponent } from '@shared/components/progress/sh-progress.component';
import { AgSwitchComponent } from '@shared/components/ag-grid/ag-switch/ag-switch.component';
import { AgDropdownComponent } from '@shared/components/ag-grid/ag-dropdown/ag-dropdown.component';
import { AgTagComponent } from '@shared/components/ag-grid/ag-tag/ag-tag.component';
import {LogoutComponent} from '@shared/components/logout/logout.component';
import {LoginComponent} from '@shared/components/login/login.component';
import {HttpService} from '@shared/services/http.service';
import {AutofocusDirective} from '@shared/directives/autofocus.directive';
import {AsyncButtonDirective} from '@shared/directives/async-button.directive';
import {ExampleInterceptor} from '@shared/interceptors/example.interceptor';
import {BaseComponent} from '@components/base-component';

const SERVICE_PROVIDERS = [
  LoggingService,
  HttpService,
];

const INTERCEPTORS = [
  { provide: HTTP_INTERCEPTORS, useClass: ExampleInterceptor, multi: true },
];

const MODULES = [
  CommonModule,
  HttpClientModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule
];

@NgModule({
  providers: [
    SERVICE_PROVIDERS,
    INTERCEPTORS,
  ],
  declarations: [
    BaseComponent,
    ShProgressComponent,
    AgActionComponent,
    AgLoadingComponent,
    AgSwitchComponent,
    AgDropdownComponent,
    AgTagComponent,
    LogoutComponent,
    LoginComponent,
    AutofocusDirective,
    AsyncButtonDirective,
  ],
  imports: [MODULES],
  exports: [
    ...MODULES,
    ShProgressComponent,
    AgActionComponent,
    AgLoadingComponent,
    LogoutComponent,
    LoginComponent,
    AutofocusDirective,
    AsyncButtonDirective
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
