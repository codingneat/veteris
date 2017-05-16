import { NgModule } from '@angular/core'
import { SharedModule } from '../../shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserFormComponent } from './user-form';
import { UserListComponent } from './user-list';
import { UserService } from './user.service';


@NgModule({
  declarations: [  
    UsersComponent,
    UserFormComponent,
    UserListComponent
  ],
  imports: [
    SharedModule,
    UsersRoutingModule,
  ],
  providers: [
    UserService
  ],
  exports: [  
    UsersComponent,
    UserFormComponent,
    UserListComponent
   ],
})
export class UsersModule {}
