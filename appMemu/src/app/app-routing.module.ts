import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShoplistComponent} from "./apps/shoplist/shoplist.component";
import {MenuComponent} from "./components/menu/menu.component";
import {BlogComponent} from "./apps/blog/blog.component";
import {CarComponent} from "./apps/car/car.component";
import {CarDetailComponent} from "./apps/car/car-detail/car-detail.component";

const routes: Routes = [
  {path: '', redirectTo: 'menu', pathMatch: 'full'},
  {path: 'menu', component: MenuComponent},
  {path: 'shop-list', component: ShoplistComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'car', component: CarComponent},
  {path: 'car/:id', component: CarDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
