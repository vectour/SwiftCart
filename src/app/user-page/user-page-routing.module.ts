import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from './user-page.component';
import { HomeComponent } from './home/home.component';
import { ListViewComponent } from './list-view/list-view.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  { path: '', component: UserPageComponent, 
  children: [
  // {path: '', redirectTo: '/home', pathMatch: "full"},
  {path: 'home', component: HomeComponent},
  {path: 'listview', component: ListViewComponent},
  {path: 'product/$id', component: ProductDetailComponent}
  ]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPageRoutingModule { }
