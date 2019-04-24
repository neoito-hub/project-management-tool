import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectRoutingModule } from './project.routing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ListProjectContainerComponent } from './container/list-project/list-project.component';
import { ProjectFormComponent } from './component/project-form/project-form.component';
import { ProjectAddContainerComponent } from './container/project-add/project-add.component';
import { ProjectDetailComponent } from './component/project-detail/project-detail.component';
import { ProjectDetailContainerComponent } from './container/project-detail/project-detail.component';
import { FileUploadComponent } from './container/file-upload/file-upload.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    CommonModule,
    ProjectRoutingModule,
    ReactiveFormsModule,
    [ModalModule.forRoot()],
    FormsModule
  ],
  declarations: [
    ListProjectContainerComponent,
    ProjectFormComponent,
    ProjectAddContainerComponent,
    ProjectDetailComponent,
    ProjectDetailContainerComponent,
    FileUploadComponent
  ]
})
export class ProjectModule {}
