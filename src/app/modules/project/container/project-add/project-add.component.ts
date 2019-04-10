import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import * as Project from '../../../../core/project';
import { Observable } from 'rxjs';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

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
    // console.log(`>>>>>>>>>>>>>>router value: ${this.router.url}`);
    if (this.router.url == '/projects/add') {
      this.isEdit = false;
    } else {
      this.route.params.subscribe(params => {
        // console.log(params.id);
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
      // console.log('emitted value');
      // console.log(value);
      this._store.dispatch(new Project.AddProject(value));
    } else {
      // console.log('emitted value to update');
      // console.log(value);
      this._store.dispatch(new Project.EditProject(value));
    }
  }
}
