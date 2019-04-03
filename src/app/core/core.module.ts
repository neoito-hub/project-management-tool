import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// app
import { reducers } from './root-reducer/index';
import { EffectsModule } from '@ngrx/effects';
import { AuthService } from './auth/services/auth.service';
import { AuthEffects } from './auth/effects/auth.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    })
  ],
  declarations: [],
  providers: [AuthService]
})
export class CoreModule {}
