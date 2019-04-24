import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import * as Project from '../../../../core/project';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-project-container',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.scss']
})
export class ListProjectContainerComponent implements OnInit {
  public projects$: Observable<any>;

  status = ['In Progress', 'On Hold', 'Completed', 'Closed'];
  constructor(public _store: Store<any>, private router: Router) {
    this._store.dispatch(new Project.LoadProjectAction());
    this.projects$ = this._store.select(Project.getAllProjects);
  }

  ngOnInit() {}
}
