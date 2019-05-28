import { ModuleWithProviders, NgModule } from '@angular/core';
import { UserHttpService } from './user/user.http.service';
import { AuthHttpService } from './auth/auth.http.service';

@NgModule({
  providers: [
    UserHttpService,
    AuthHttpService
  ]
})
export class HttpServiceModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: HttpServiceModule
    };
  }
}


