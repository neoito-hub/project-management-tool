import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import * as User from '../../../../core/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-form-container',
  templateUrl: './user-form-container.component.html',
  styleUrls: ['./user-form-container.component.scss']
})
export class UserFormContainerComponent implements OnInit {
  isEdit: boolean;
  public users$: Observable<any>;
  user: any;
  constructor(
    public _store: Store<any>,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    if (this.router.url == '/users/add') {
      this.isEdit = false;
    } else {
      this.route.params.subscribe(params => {
        if (params) {
          this._store.dispatch(new User.FindUserAction(params.id));
        }
      });
      this.users$ = this._store.select(User.getSelectedUser);
      this.users$.subscribe((v: any) => {
        if (v) {
          this.user = v;
        }
      });
      this.isEdit = true;
    }
  }

  onSubmitUser(value) {
    if (!this.isEdit) {
      this._store.dispatch(new User.AddUserAction(value));
    } else {
      this._store.dispatch(new User.UpdateUserAction(value));
    }
  }
}
