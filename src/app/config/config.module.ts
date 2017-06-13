import { NgModule } from '@angular/core'
import { SharedModule } from '../shared/shared.module';
import { ConfigComponent } from './config.component';
import { DashboardConfigComponent } from './dashboard/dashboard-config.component';
import { ConfigRoutingModule } from './config-routing.module';
import { UsersModule } from './users/users.module';


@NgModule({
  declarations: [ConfigComponent, DashboardConfigComponent],
  imports: [
    SharedModule,
    ConfigRoutingModule,
    UsersModule
  ],
  exports: [ConfigComponent, DashboardConfigComponent],
})
export class ConfigModule { }
