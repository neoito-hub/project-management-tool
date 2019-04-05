import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import * as Project from '../../../../core/project';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-project-container',
  templateUrl: './list-project.component.html'
})
export class ListProjectContainerComponent implements OnInit {
  public data$: Observable<any>;
  constructor(public _store: Store<any>, private router: Router) {
    this._store.dispatch(new Project.LoadProjectAction());
    this.data$ = this._store.select(Project.getAllProjects);
    //console.log(this.data$);
  }

  ngOnInit() {}
}
