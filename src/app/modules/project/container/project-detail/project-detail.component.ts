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
import { FormBuilder, Validators } from '@angular/forms';
import { ProjectService } from 'src/app/core/project/services';

@Component({
  selector: 'app-project-detail-container',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailContainerComponent implements OnInit {
  bsModalRef: BsModalRef;
  $projectdata: Observable<any>;
  $projectResourcedata: Observable<any>;
  $projectResourceList: Observable<any>;
  projectdata: any;
  projectResourcedata: any;
  projectResourceList: any;
  isEdit: boolean;
  myForm;
  resource: any;
  selectedResource;
  projectDocuments: any[];
  id: string;
  constructor(
    private projectStore: Store<Project.ProjectState>,
    private resourceStore: Store<Resource.ResourceState>,
    private router: ActivatedRoute,
    private route: Router,
    private resourceService: ResourceService,
    private modalService: BsModalService,
    private _fb: FormBuilder,
    private projectservice: ProjectService
  ) {
    this.isEdit = false;
  }
  ngOnInit() {
    this.id = this.router.snapshot.paramMap.get('id');
    // this.resourceStore.dispatch(new Resource.LoadResourceAction());
    this.projectStore.dispatch(new Project.FindProject(this.id));
    this.projectStore.dispatch(new Project.GetProjectResources(this.id));
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
        if (v.documents) {
          this.projectDocuments = v.documents;
          console.log('project documents', this.projectDocuments);
        } else {
          this.projectDocuments = [];
        }
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

    if (!this.isEdit) {
      this.$projectdata.subscribe(v => {
        if (v) {
          this.projectdata = v;
          this.myForm = this._fb.group({
            id: '',
            projectId: [this.projectdata.projectId],
            resourceId: '',
            name: [''],
            costPerHour: ['', [Validators.required]],
            hours: ['', [Validators.required]],
            allocationStart: ['', [Validators.required]],
            allocationEnd: ['', [Validators.required]]
          });
        }
      });
    }
  }

  goBack() {
    this.route.navigate(['/projects']);
  }
  uploadDoc(args: any) {
    console.log('argsss=>', args);
    const initialState = {
      title: 'Upload your files here',
      projectID: args
    };
    this.bsModalRef = this.modalService.show(FileUploadComponent, {
      initialState
    });
    this.bsModalRef.content.closeBtnName = 'Close';
  }
  onSubmitAllocation() {
    if (!this.myForm.valid) {
      alert('Make sure all feilds are filled');
    } else {
      if (!this.isEdit) {
        this.projectStore.dispatch(
          new Project.AddResourceAllocationAction(this.myForm.value)
        );
      }
      if (this.isEdit) {
        this.projectStore.dispatch(
          new Project.EditResourceAllocationAction(this.myForm.value)
        );
        this.isEdit = false;
        let patchId = this.myForm.value.projectId;
        this.myForm.reset();
        this.myForm.patchValue({ projectId: patchId });
        this.isEdit = false;
      }
    }

    console.log(this.myForm.value);
  }
  onChangeResource(id) {
    //alert(`selected is ${id}`);
    this.resourceService.getResourceList().subscribe(data => {
      if (data) {
        let res = data.find(res => res.resourceId == id);
        this.myForm.patchValue({ name: res.name });
      }
    });
  }
  editResourcePopup(id) {
    this.$projectResourcedata.subscribe(data => {
      if (data) {
        let res = data.find(res => res.id == id);
        this.myForm.patchValue(res);
        this.isEdit = true;
      }
    });
  }
  deleteLink(args: any) {
    console.log('delete-->args', args);
    let delDoc = this.projectDocuments.filter(v => v.url != args);
    console.log('delDoc', delDoc);
    this.projectservice.addDocuments(delDoc, this.id);
  }
}
