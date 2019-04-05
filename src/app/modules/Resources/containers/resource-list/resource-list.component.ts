import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LOGOUT_SUBMIT } from 'src/app/core/auth/actions/auth.action';
import { Router } from '@angular/router';
import * as Resource from '../../../../core/resource';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-resourcelistcontainer',
  templateUrl: './resource-list.component.html'
})
export class ResourceListContainerComponent implements OnInit {
  public data$: Observable<any>;
  constructor(public _store: Store<any>, private router: Router) {
    this._store.dispatch(new Resource.LoadResourceAction());
    this.data$ = this._store.select(Resource.getAllResources);
  }

  ngOnInit() {}
}
