import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import * as Project from '../../../../core/project';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-project-add-container',
  templateUrl: './project-add.component.html'
})
export class ProjectAddContainerComponent implements OnInit {
  isEdit: boolean;
  public project$: Observable<any>;
  project1: any;
  constructor(
    public _store: Store<any>,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    if (this.router.url == '/projects/add') {
      this.isEdit = false;
    } else {
      this.route.params.subscribe(params => {
        if (params) {
          this._store.dispatch(new Project.FindProject(params.id));
        }
      });
      this.project$ = this._store.select(Project.getProjectSelected);
      this.project$.subscribe((v: any) => {
        if (v) {
          this.project1 = v;
        }
      });
      this.isEdit = true;
    }
  }

  onSubmitProject(value) {
    if (!this.isEdit) {
      this._store.dispatch(new Project.AddProject(value));
    } else {
      this._store.dispatch(new Project.EditProject(value));
    }
  }
}
