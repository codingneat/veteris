import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { AuthService } from './auth.service';
import { LoginRoutingModule } from './auth.routing';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    LoginRoutingModule,
    SharedModule
  ],
  providers: [
    AuthService,
  ]
})
export class AuthModule {}