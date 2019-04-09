import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { LOGOUT_SUBMIT } from 'src/app/core/auth/actions/auth.action';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as Resource from '../../../../core/resource';

@Component({
  selector: 'app-resourceaddcomponent',
  templateUrl: './resource-add.component.html'
})
export class ResourceAddComponent implements OnInit {
  res_id;
  navButton;
  registerForm: FormGroup;
  @Output()
  submittedValue = new EventEmitter();
  @Output()
  updatedValue = new EventEmitter();
  selectedData$: any;

  constructor(
    private _store: Store<any>,
    private formBuilder: FormBuilder,
    private router: Router,
    private routes: ActivatedRoute
  ) {
    this.buildForm();
  }

  ngOnInit() {
    this.routes.params.subscribe(param => {
      this.res_id = param.id;
    });

    if (localStorage.getItem('resourceClick') === 'EDIT') {
      this.navButton = 'Update';
      this._store.dispatch(new Resource.FindResourceAction(this.res_id));
      this.selectedData$ = this._store.select(Resource.getSelectedResources1);
      this.selectedData$.subscribe((v: any) => {
        if (v) {
          if (v.length == 1) {
            this.registerForm.patchValue(v[0]);
          }
        }
      });
    } else {
      this.navButton = 'Add';
    }
  }

  onSubmit() {
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
    // this._store.dispatch(
    //   new Resource.AddResourceAction(this.registerForm.value)
    // );
    if (localStorage.getItem('resourceClick') === 'ADD') {
      this.submittedValue.emit(this.registerForm.value);
    } else {
      let updateValue = this.registerForm.value;
      let payload = { data: updateValue, id: this.res_id };
      this.updatedValue.emit(payload);
    }
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
