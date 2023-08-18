import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { LoggingService } from '../services';

const MODULES = [FormsModule, RouterTestingModule, HttpClientTestingModule];

@NgModule({
    providers: [provideMockStore()],
    imports: MODULES,
    exports: MODULES,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TestingModule {}
