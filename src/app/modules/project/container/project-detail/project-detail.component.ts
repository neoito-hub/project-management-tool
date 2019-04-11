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
  isEdit: boolean;
  myForm;
  resource: any;
  selectedResource;
  constructor(
    private projectStore: Store<Project.ProjectState>,
    private resourceStore: Store<Resource.ResourceState>,
    private router: ActivatedRoute,
    private route: Router,
    private resourceService: ResourceService,
    private modalService: BsModalService,
    private _fb: FormBuilder
  ) {
    this.isEdit = false;
  }
  ngOnInit() {
    console.log('heyyyyyyyyyyyyyyyyyyyyy', this.resource);
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
}
