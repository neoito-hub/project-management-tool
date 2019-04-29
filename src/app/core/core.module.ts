import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// app
import { reducers } from './root-reducer/index';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth/effects';
import { ResourceEffect } from './resource/effects';
import { ResourceService } from './resource/services';
import { ProjectService } from './project/services';
import { ProjectEffects } from './project';
import { UserEffect } from './user';
import { UserService } from './user/services';
import { AuthService } from './auth/services/auth.service';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      ...AuthEffects,
      ...ResourceEffect,
      ...ProjectEffects,
      ...UserEffect
    ]),
    StoreDevtoolsModule.instrument({})
  ],
  declarations: [],
  providers: [ResourceService, ProjectService, UserService, AuthService]
})
export class CoreModule {}
