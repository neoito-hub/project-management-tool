import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// app
import { reducers } from './root-reducer/index';
import { EffectsModule } from '@ngrx/effects';
import { AuthService } from './auth/services/auth.service';
import { AuthEffects } from './auth/effects/auth.effects';
import { ResourceEffect } from './resource/effects/resource.effect';
import { ResourceService } from './resource/services';
import { ProjectService } from './project/services';
import { ProjectEffects } from './project';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects, ResourceEffect, ...ProjectEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    })
  ],
  declarations: [],
  providers: [AuthService, ResourceService, ProjectService]
})
export class CoreModule {}
