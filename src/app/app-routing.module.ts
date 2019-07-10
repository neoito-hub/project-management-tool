import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './core/auth/services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/projects', pathMatch: 'full' },

  {
    path: 'projects',
    loadChildren: () => import('./modules/project/project.module').then(m => m.ProjectModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'resources',
    loadChildren: () => import('./modules/resource/resource.module').then(m => m.ResourceModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'users',
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule),
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
