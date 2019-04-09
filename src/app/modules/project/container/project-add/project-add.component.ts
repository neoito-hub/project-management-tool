import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import * as Project from '../../../../core/project';
import { Observable } from 'rxjs';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-project-add-container',
  templateUrl: './project-add.component.html'
})
export class ProjectAddContainerComponent implements OnInit {
  constructor(public _store: Store<any>, private router: Router) {}
  ngOnInit() {}

  onSubmitProject(value) {
    console.log('emitted value');
    console.log(value);
    this._store.dispatch(new Project.AddProject(value));
  }
}
