import { Component } from '@angular/core';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project-management-tool';
  isLoggedIn: boolean;
  constructor(private router: Router) {
    router.events.subscribe((event: RouterEvent) => {
      this.navigationAuthCheck(event);
    });
  }
  navigationAuthCheck(event: RouterEvent): void {
    if (event instanceof NavigationEnd) {
      if (this.router.url === '/login') {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
      }
    }
  }
}
