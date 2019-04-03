import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, DashboardRoutingModule, ReactiveFormsModule],
  declarations: [DashboardComponent]
})
export class DashboardModule {}
