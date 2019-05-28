import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './pages/login/login.module#LoginModule'
  },
  {
    path: 'user',
    loadChildren: './pages/user/user.module#UserModule'
  },
  {
    path: 'projects',
    loadChildren: './pages/project/project.module#ProjectModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
