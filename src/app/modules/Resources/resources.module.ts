import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { ResourcesRoutingModule } from './resources.routing';
import { ResourceAddComponent } from './components/resource-add/resource-add.component';
import { ResourceListComponent } from './components/resource-list/resource-list.component';
import { ResourceAddContainerComponent } from './containers/resource-add/resource-add.component';
import { ResourceListContainerComponent } from './containers/resource-list/resource-list.component';

@NgModule({
  imports: [CommonModule, ResourcesRoutingModule, ReactiveFormsModule],
  declarations: [
    ResourceAddComponent,
    ResourceListComponent,
    ResourceAddContainerComponent,
    ResourceListContainerComponent
  ]
})
export class ResourcesModule {}
