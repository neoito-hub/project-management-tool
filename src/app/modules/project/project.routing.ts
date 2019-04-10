import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProjectContainerComponent } from './container/list-project/list-project.component';
import { ProjectAddContainerComponent } from './container/project-add/project-add.component';
import { AuthGuardService as AuthGuard } from 'src/app/core/auth/services/auth-guard.service';
import { ProjectDetailContainerComponent } from './container/project-detail/project-detail.component';
import { FileUploadComponent } from './container/file-upload/file-upload.component';

const routes: Routes = [
  {
    path: 'projects',
    component: ListProjectContainerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'projects/add',
    component: ProjectAddContainerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'projects/detail/:id',
    component: ProjectDetailContainerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'projects/edit/:id',
    component: ProjectAddContainerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'projects/file-upload',
    component: FileUploadComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule {}
