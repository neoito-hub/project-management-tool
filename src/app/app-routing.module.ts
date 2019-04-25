import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './core/auth/services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/projects', pathMatch: 'full' },

  {
    path: 'projects',
    loadChildren: './modules/project/project.module#ProjectModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'resources',
    loadChildren: './modules/resource/resource.module#ResourceModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'users',
    loadChildren: './modules/user/user.module#UserModule',
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
