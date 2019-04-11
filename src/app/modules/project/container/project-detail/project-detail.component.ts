import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import * as Project from '../../../../core/project';
import * as Resource from '../../../../core/resource';
import { Observable } from 'rxjs';
import { ResourceService } from 'src/app/core/resource/services';
import { map, catchError } from 'rxjs/operators';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FileUploadComponent } from '../file-upload/file-upload.component';

@Component({
  selector: 'app-project-detail-container',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailContainerComponent implements OnInit {
  bsModalRef: BsModalRef;
  $projectdata: Observable<any>;
  $projectResourcedata: Observable<any>;
  $projectResourceList: Observable<any>;
  projectdata: any;
  projectResourcedata: any;
  projectResourceList: any;
  constructor(
    private projectStore: Store<Project.ProjectState>,
    private resourceStore: Store<Resource.ResourceState>,
    private router: ActivatedRoute,
    private route: Router,
    private resourceService: ResourceService,
    private modalService: BsModalService
  ) {}
  ngOnInit() {
    let id = this.router.snapshot.paramMap.get('id');
    // this.resourceStore.dispatch(new Resource.LoadResourceAction());
    this.projectStore.dispatch(new Project.FindProject(id));
    this.projectStore.dispatch(new Project.GetProjectResources(id));
    // this.$projectResourceList = this.resourceStore.select(
    //   Resource.getAllResources
    // );
    // this.$projectResourceList.subscribe(v => {
    //   if (v) {
    //     console.log(v);
    //     this.projectResourceList = v;
    //   }
    // });
    this.$projectdata = this.projectStore.select(Project.getProjectSelected);
    this.$projectdata.subscribe(v => {
      if (v) {
        this.projectdata = v;
      }
    });
    this.$projectResourcedata = this.projectStore.select(
      Project.getResourcesOfProject
    );
    this.$projectResourcedata.subscribe(v => {
      if (v) {
        this.projectResourcedata = v;
      }
    });

    this.resourceService.getResourceList().subscribe(data => {
      this.projectResourceList = data;
    });
  }

  goBack() {
    this.route.navigate(['/projects']);
  }
  uploadDoc() {
    const initialState = {
      list: [
        'Open a modal with component',
        'Pass your data',
        'Do something else',
        '...'
      ],
      title: 'Modal with component'
    };
    this.bsModalRef = this.modalService.show(FileUploadComponent, {
      initialState
    });
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
