import {Component, OnInit} from '@angular/core';
import { NavigationEnd, Router } from "@angular/router";
import {OktaAuthStateService} from '@okta/okta-angular';
import {Observable} from 'rxjs';
import { User } from "./shared/models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isAuthenticated = false;
  isHeaderVisible = false;
  user$: Observable<User | undefined>;

  constructor(
    public authStateService: OktaAuthStateService,
    private router: Router
  ) {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.isHeaderVisible = val.urlAfterRedirects !== "/";
      }
    });
  }

  ngOnInit(): void {
    this.isAuthenticated = true;
  }

}
