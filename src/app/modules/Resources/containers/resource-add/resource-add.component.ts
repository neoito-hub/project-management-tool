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
export class ResourceAddContainerComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private _store: Store<any>,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit() {}

  onSubmit() {
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
    this._store.dispatch(
      new Resource.AddResourceAction(this.registerForm.value)
    );
  }

  buildForm() {
    this.registerForm = this.formBuilder.group({
      bitbucket: [''],
      email: [''],
      experience: [''],
      github: [''],
      gitlab: [''],
      name: [''],
      upwork: ['']
    });
  }

  cancel() {
    this.router.navigate(['resource-list']);
  }
}
