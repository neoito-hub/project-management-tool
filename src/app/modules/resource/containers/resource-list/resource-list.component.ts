import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LOGOUT_SUBMIT } from 'src/app/core/auth/actions/auth-logout.action';
import { Router } from '@angular/router';
import * as Resource from '../../../../core/resource';
import { Observable } from 'rxjs';

import { TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-resourcelistcontainer',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.scss']
})
export class ResourceListContainerComponent implements OnInit {
  resId: string;
  public data$: Observable<any>;
  constructor(public _store: Store<any>, private router: Router) {
    this._store.dispatch(new Resource.LoadResourceAction());
    this.data$ = this._store.select(Resource.getAllResources);
  }

  ngOnInit() {}
  clickAdd() {
    localStorage.setItem('resourceClick', 'ADD');
  }
  onClickDelete(args: any) {
    // console.log('argss...............', args);
    this.resId = args;
  }
  deleteConfirm(): void {
    // function to dispatch action from delete modal
    this._store.dispatch(
      new Resource.DeleteResourceAction({ tab: 'ResourceList', id: this.resId })
    );
  }
}
