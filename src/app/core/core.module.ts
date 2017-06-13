import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { SocketService, ApiService } from './services';


@NgModule({
  declarations: [
  ],
  providers: [
    ApiService,
    SocketService
  ],
  imports: [SharedModule],
  exports: [
  ],
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
