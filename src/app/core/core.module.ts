import { ModuleWithProviders, NgModule, Optional, SkipSelf }  from '@angular/core';

import { SharedModule }       from '../shared/shared.module';
import { TitleComponent }    from './components';
import { DialogService, UserService, SocketService, ApiService, AuthenticationService, UserServiceConfig}  from './services';


@NgModule({
  declarations: [
    TitleComponent
  ],
  providers: [
    DialogService, 
    ApiService, 
    AuthenticationService,
    UserService,
    SocketService
  ],
  imports: [ SharedModule ],
  exports: [
    TitleComponent
  ],
})
export class CoreModule {
 constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(config: UserServiceConfig): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        {provide: UserServiceConfig, useValue: config }
      ]
    };
  }

}
