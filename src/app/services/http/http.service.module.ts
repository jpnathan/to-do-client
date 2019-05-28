import { ModuleWithProviders, NgModule } from '@angular/core';

import { UserHttpService } from './user/user.http.service';
import { AuthHttpService } from './auth/auth.http.service';
import { ProjectHttpService } from './project/project.http.service';
import { TaskHttpService } from './task/task.http.service';

@NgModule({
  providers: [
    UserHttpService,
    AuthHttpService,
    ProjectHttpService,
    TaskHttpService
  ]
})
export class HttpServiceModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: HttpServiceModule
    };
  }
}


