import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProjectContainerComponent } from './container/list-project/list-project.component';
import { ProjectAddContainerComponent } from './container/project-add/project-add.component';
import { ProjectDetailContainerComponent } from './container/project-detail/project-detail.component';
import { FileUploadComponent } from './container/file-upload/file-upload.component';

const routes: Routes = [
  {
    path: '',
    component: ListProjectContainerComponent
  },
  {
    path: 'add',
    component: ProjectAddContainerComponent
  },
  {
    path: 'detail/:id',
    component: ProjectDetailContainerComponent
  },
  {
    path: 'edit/:id',
    component: ProjectAddContainerComponent
  },
  {
    path: 'file-upload',
    component: FileUploadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule {}
