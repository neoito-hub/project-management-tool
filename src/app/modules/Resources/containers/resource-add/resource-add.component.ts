import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LOGOUT_SUBMIT } from 'src/app/core/auth/actions/auth.action';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as Resource from '../../../../core/resource';

@Component({
  selector: 'app-resourceaddcontainer',
  templateUrl: './resource-add.component.html'
})
export class ResourceAddContainerComponent {
  registerForm: FormGroup;

  constructor(
    private _store: Store<any>,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  onSubmitProperty(value) {
    this._store.dispatch(new Resource.AddResourceAction(value));
  }
  onUpdateProperty(value) {
    this._store.dispatch(new Resource.UpdateResourceAction(value));
  }
}
