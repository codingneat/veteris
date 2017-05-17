import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';
import { Http, RequestOptions } from '@angular/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { appReducer } from './app.reducer';

import { AuthEffects } from './auth/auth.effects';
import { UsersEffects } from './config/users/users.effects';
import { EnumsEffects } from './config/enums/enums.effects';
import { WebpagesEffects } from './webpage/webpage.effects';


import { AppRoutingModule } from './app.routing';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from './config/config.module';
import { CoreModule } from './core/core.module';
import { UsersModule } from './config/users/users.module';
import { EnumsModule } from './config/enums/enums.module';
import { WebpageModule } from './webpage/webpage.module';


import { MainLayoutComponent } from './layouts/main-layout.component';
import { HomeComponent } from './components/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomeComponent,
    NavbarComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,
    MaterialModule.forRoot(),
    StoreModule.provideStore(appReducer),
    RouterStoreModule.connectRouter(),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(AuthEffects),
    EffectsModule.run(UsersEffects),
    EffectsModule.run(EnumsEffects),
    EffectsModule.run(WebpagesEffects),
    AuthModule,
    ConfigModule,
    CoreModule.forRoot({userName: 'Miss Marple'}),
    EnumsModule,
    UsersModule,
    WebpageModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
