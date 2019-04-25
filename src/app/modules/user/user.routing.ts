import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUserContainerComponent } from './container/list-user-container/list-user-container.component';
import { UserFormContainerComponent } from './container/user-form-container/user-form-container.component';
import { UserDetailContainerComponent } from './container/user-detail-container/user-detail-container.component';

const routes: Routes = [
  {
    path: '',
    component: ListUserContainerComponent
  },
  {
    path: 'add',
    component: UserFormContainerComponent
  },
  {
    path: 'detail/:id',
    component: UserDetailContainerComponent
  },
  {
    path: 'edit/:id',
    component: UserFormContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
