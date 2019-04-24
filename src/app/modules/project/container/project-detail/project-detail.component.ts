import { Component, OnInit, Input, TemplateRef } from '@angular/core';
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
import * as firebase from 'firebase/app';

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
  submitFlag: boolean;
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
    this.projectStore.dispatch(new Project.FindProject(this.id));
    this.projectStore.dispatch(new Project.GetProjectResources(this.id));
    this.$projectdata = this.projectStore.select(Project.getProjectSelected);
    this.$projectdata.subscribe(v => {
      if (v) {
        this.projectdata = v;
        if (v.documents) {
          this.projectDocuments = v.documents;
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
    //e
    this.populateResourceDropdown();

    if (!this.isEdit) {
      this.buildForm();
    }
    if (this.isEdit) {
      this.submitFlag = true;
    } else {
      this.submitFlag = false;
    }
  }
  populateResourceDropdown() {
    this.resourceService.getResourceList().subscribe(data => {
      let allocatedData = this.projectResourcedata;
      let excludeIds = allocatedData.map(data => {
        return data.resourceId;
      });
      this.projectResourceList = data.filter(item => {
        return excludeIds.indexOf(item.resourceId) == -1;
      });
    });
  }
  uploadDoc(args: any) {
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
    this.submitFlag = true;
    if (!this.myForm.valid) {
      alert('Validation Error');
    } else {
      if (!this.isEdit) {
        this.projectStore.dispatch(
          new Project.AddResourceAllocationAction(this.myForm.value)
        );
        this.bsModalRef.hide();
      }
      if (this.isEdit) {
        this.projectStore.dispatch(
          new Project.EditResourceAllocationAction(this.myForm.value)
        );
        this.bsModalRef.hide();
      }
    }
  }
  onChangeResource(id) {
    this.resourceService.getResourceList().subscribe(data => {
      if (data) {
        let res = data.find(res => res.resourceId == id);
        this.myForm.patchValue({ name: res.name });
      }
    });
  }
  editResourcePopup(id, template: TemplateRef<any>) {
    this.$projectResourcedata.subscribe(data => {
      if (data) {
        let res = data.find(res => res.id == id);
        if (res) {
          this.myForm.patchValue(res);

          this.isEdit = true;
        }
      }
    });
    this.bsModalRef = this.modalService.show(template);
  }
  deleteLink(args: any) {
    if (window.confirm('Do you really want to Delete?')) {
      let delDoc = this.projectDocuments.filter(v => v.url != args.url);
      this.projectservice.addDocuments(delDoc, this.id).subscribe(
        v => {
          if (v) {
            let storageRef = firebase.storage().ref();
            storageRef
              .child(`${args.firebasename}`)
              .delete()
              .then(res => {
                alert('deleted');
              })
              .catch(error => {
                alert('error in deleting bucket');
              });
          }
        },
        error => {
          console.log('error', error);
        }
      );
    }
  }
  removeAllocation(resourceObj) {
    if (window.confirm('Do you really want to remove this resource?')) {
      this.projectStore.dispatch(
        new Project.DeleteResourceAllocationAction(resourceObj)
      );
    }
  }
  clearAndPatch(template: TemplateRef<any>) {
    this.populateResourceDropdown();
    this.isEdit = false;
    this.myForm.reset();
    this.buildForm();
    this.bsModalRef = this.modalService.show(template);
  }
  buildForm() {
    this.$projectdata.subscribe(v => {
      if (v) {
        this.projectdata = v;
        this.myForm = this._fb.group({
          id: '',
          projectId: [this.projectdata.projectId],
          resourceId: ['', [Validators.required]],
          name: [''],
          costPerHour: ['', [Validators.required]],
          hours: ['', [Validators.required]],
          allocationStart: ['', [Validators.required]],
          allocationEnd: ['', [Validators.required]]
        });
      }
    });
  }
  get f() {
    return this.myForm.controls;
  }
}
