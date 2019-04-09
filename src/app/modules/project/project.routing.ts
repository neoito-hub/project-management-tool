import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProjectContainerComponent } from './container/list-project/list-project.component';
import { ProjectAddContainerComponent } from './container/project-add/project-add.component';
import { AuthGuardService as AuthGuard } from 'src/app/core/auth/services/auth-guard.service';

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule {}
