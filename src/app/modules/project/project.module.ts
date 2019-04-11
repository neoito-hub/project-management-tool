import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProjectComponent } from './component/list-project/list-project.component';
import { ProjectRoutingModule } from './project.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { ListProjectContainerComponent } from './container/list-project/list-project.component';
import { ProjectAddComponent } from './component/project-add/project-add.component';
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
    [ModalModule.forRoot()]
  ],
  declarations: [
    ListProjectComponent,
    ListProjectContainerComponent,
    ProjectAddComponent,
    ProjectAddContainerComponent,
    ProjectDetailComponent,
    ProjectDetailContainerComponent,
    FileUploadComponent
  ]
})
export class ProjectModule {}
