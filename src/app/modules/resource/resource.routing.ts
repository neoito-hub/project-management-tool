import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService as AuthGuard } from '../../core/auth/services/auth-guard.service';
import { ResourceListContainerComponent } from './containers/resource-list/resource-list.component';
import { ResourceAddContainerComponent } from './containers/resource-add/resource-add.component';

const routes: Routes = [
  // { path: '', redirectTo: 'resource-list', pathMatch: 'full' },
  {
    path: '',
    component: ResourceListContainerComponent
  },

  {
    path: 'add',
    component: ResourceAddContainerComponent
  },
  {
    path: 'edit/:id',
    component: ResourceAddContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourceRoutingModule {}
