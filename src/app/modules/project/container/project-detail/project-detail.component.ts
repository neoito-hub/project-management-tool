import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import * as Project from '../../../../core/project';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-project-detail-container',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailContainerComponent implements OnInit {
  $projectdata: Observable<any>;
  $projectResourcedata: Observable<any>;
  projectdata: any;
  projectResourcedata: any;
  constructor(
    public _store: Store<any>,
    private router: ActivatedRoute,
    private route: Router
  ) {}
  ngOnInit() {
    let id = this.router.snapshot.paramMap.get('id');
    this._store.dispatch(new Project.FindProject(id));
    this._store.dispatch(new Project.GetProjectResources(id));
    this.$projectdata = this._store.select(Project.getProjectSelected);
    this.$projectdata.subscribe(v => {
      if (v) {
        this.projectdata = v;
      }
    });
    this.$projectResourcedata = this._store.select(
      Project.getProjectResources1
    );
    this.$projectResourcedata.subscribe(v => {
      if (v) {
        this.projectResourcedata = v;
      }
    });
  }

  goBack() {
    this.route.navigate(['/projects']);
  }
  upload() {
    this.route.navigate(['/projects/file-upload']);
  }
}
