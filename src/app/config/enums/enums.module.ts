import { NgModule } from '@angular/core'
import { SharedModule } from '../../shared/shared.module';
import { EnumsRoutingModule } from './enums-routing.module';
import { EnumsComponent } from './enums.component';
import { EnumsService } from './enums.service';
import { ThemeFormComponent, ThemeListComponent } from './themes';
import { TagFormComponent, TagListComponent } from './tags';
import { CategoryFormComponent, CategoryListComponent } from './categories';


@NgModule({
  declarations: [  
    EnumsComponent,
    ThemeFormComponent,
    ThemeListComponent,
    TagFormComponent,
    TagListComponent,
    CategoryFormComponent,
    CategoryListComponent
  ],
  imports: [
    SharedModule,
    EnumsRoutingModule,
  ],
  providers: [
    EnumsService
  ],
  exports: [  
    EnumsComponent,
    ThemeFormComponent,
    ThemeListComponent,
    TagFormComponent,
    TagListComponent,
    CategoryFormComponent,
    CategoryListComponent
   ],
})
export class EnumsModule {}
