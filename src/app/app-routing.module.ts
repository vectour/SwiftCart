import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {path: '', redirectTo: 'userpage/home', pathMatch:"full"},
  {path: 'userpage', loadChildren: () => import('./user-page/user-page.module').then(m => m.UserPageModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
