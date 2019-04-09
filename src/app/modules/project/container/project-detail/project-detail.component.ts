import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import * as Project from '../../../../core/project';

@Component({
  selector: 'app-project-detail-container',
  templateUrl: './project-detail.component.html'
})
export class ProjectDetailContainerComponent implements OnInit {
  constructor(public _store: Store<any>, private router: ActivatedRoute) {}
  ngOnInit() {
    let id = this.router.snapshot.paramMap.get('id');
    console.log('our id', id);
    this._store.dispatch(new Project.FindProjectAction(id));
  }
}
