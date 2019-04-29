import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LOGOUT_SUBMIT } from 'src/app/core/auth/actions/auth-logout.action';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  constructor(private store: Store<any>) {}

  ngOnInit() {}
  logout() {
    if (window.confirm('Do you really want to Logout?')) {
      this.store.dispatch({
        type: LOGOUT_SUBMIT
      });
    }
  }
}
