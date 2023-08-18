import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'sh-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  pageTitle: string;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.setPageTitle();
      }
    });
  }

  ngOnInit() {
    this.setPageTitle();
  }

  setPageTitle() {
  }

  siteNavigationSelected(e: CustomEvent) {
    if (e.detail.name === 'Logout') {
      this.logout();
      return;
    }
    this.setPageTitle();
    this.router.navigate([`/${e.detail.url}`]);
  }

  logout() {
    return false;
  }
}
