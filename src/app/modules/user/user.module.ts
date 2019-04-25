import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user.routing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ListUserContainerComponent } from './container/list-user-container/list-user-container.component';
import { UserFormContainerComponent } from './container/user-form-container/user-form-container.component';
import { UserDetailContainerComponent } from './container/user-detail-container/user-detail-container.component';
import { UserFormComponent } from './component/user-form/user-form.component';
import { UserDetailComponent } from './component/user-detail/user-detail.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    [ModalModule.forRoot()],
    FormsModule
  ],
  declarations: [
    ListUserContainerComponent,
    UserFormComponent,
    UserFormContainerComponent,
    UserDetailComponent,
    UserDetailContainerComponent
  ]
})
export class UserModule {}
