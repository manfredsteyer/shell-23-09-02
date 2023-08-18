import { Component } from '@angular/core';

@Component({
  template: `
        <div>
            You have been successfully logged out. Click <a [routerLink]="['/home']">here</a> to return to the application
        </div>
    `,
})
export class LogoutComponent {}
