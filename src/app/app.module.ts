import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { firebaseConfig } from './shared/firebase.config';
import { CoreModule } from './core/core.module';
import { AuthGuardService } from './core/auth/services/auth-guard.service';
import { ResourcesModule } from './modules/Resources/resources.module';
import { ProjectModule } from './modules/project/project.module';
import { AngularFireDatabase } from '@angular/fire/database';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    DashboardModule,
    ProjectModule,
    ResourcesModule,
    AuthModule,
    CoreModule
  ],
  providers: [AuthGuardService, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule {}
