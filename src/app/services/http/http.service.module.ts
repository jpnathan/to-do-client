import { ModuleWithProviders, NgModule } from '@angular/core';
import { UserHttpService } from './user/user.http.service';

@NgModule({
  providers: [
    UserHttpService
  ]
})
export class HttpServiceModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: HttpServiceModule
    };
  }
}


