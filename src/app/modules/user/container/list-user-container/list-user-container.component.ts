import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import * as User from '../../../../core/user';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-list-user-container',
  templateUrl: './list-user-container.component.html',
  styleUrls: ['./list-user-container.component.scss']
})
export class ListUserContainerComponent implements OnInit {
  public users$: Observable<any>;
  constructor(public _store: Store<any>, private router: Router) {
    this._store.dispatch(new User.LoadUserAction());
    this.users$ = this._store.select(User.getAllUsers);
  }

  ngOnInit() {}
}
