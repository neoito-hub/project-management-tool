import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService as AuthGuard } from '../../core/auth/services/auth-guard.service';
import { ResourceListContainerComponent } from './containers/resource-list/resource-list.component';
import { ResourceAddContainerComponent } from './containers/resource-add/resource-add.component';

const routes: Routes = [
  // { path: '', redirectTo: 'resource-list', pathMatch: 'full' },
  {
    path: 'resource-list',
    component: ResourceListContainerComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'resource-add',
    component: ResourceAddContainerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'resource-edit/:id',
    component: ResourceAddContainerComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourcesRoutingModule {}
