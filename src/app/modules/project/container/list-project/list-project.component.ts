import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import * as Project from '../../../../core/project';
import { Observable } from 'rxjs';
import { projectStatusList } from '../../../../shared/const-values';

@Component({
  selector: 'app-project-container',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.scss']
})
export class ListProjectContainerComponent implements OnInit {
  public projects$: Observable<any>;

  status = projectStatusList.map(item => item.status);
  constructor(public _store: Store<any>, private router: Router) {
    this._store.dispatch(new Project.LoadProjectAction());
    this.projects$ = this._store.select(Project.getAllProjects);
  }

  ngOnInit() {}
}
