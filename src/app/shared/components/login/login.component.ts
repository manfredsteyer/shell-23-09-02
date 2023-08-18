import { Component, OnInit } from '@angular/core';
//import { AuthService } from '@signifyhealth/angular-common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    //private oktaAuth: AuthService
) { }
  async ngOnInit() {
    //this.oktaAuth.login('/home');
  }
}
