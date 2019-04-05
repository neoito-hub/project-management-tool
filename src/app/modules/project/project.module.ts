import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProjectComponent } from './component/list-project/list-project.component';
import { ProjectRoutingModule } from './project.routing';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ProjectRoutingModule, ReactiveFormsModule],
  declarations: [ListProjectComponent]
})
export class ProjectModule {}
