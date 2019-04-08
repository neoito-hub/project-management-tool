import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProjectContainerComponent } from './container/list-project/list-project.component';

const routes: Routes = [
  { path: 'projects', component: ListProjectContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule {}
