import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ShoplistComponent } from './apps/shoplist/shoplist.component';
import { MenuComponent } from './components/menu/menu.component';
import { ShoptableComponent } from './apps/shoplist/shoptable/shoptable.component';
import { ShoptableFormComponent } from './apps/shoplist/shoptable-form/shoptable-form.component';
import {FormsModule} from "@angular/forms";
import { BlogComponent } from './apps/blog/blog.component';
import { CardComponent } from './apps/blog/card/card.component';
import { CardFormComponent } from './apps/blog/card-form/card-form.component';
import { CarComponent } from './apps/car/car.component';
import { CarDetailComponent } from './apps/car/car-detail/car-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoplistComponent,
    MenuComponent,
    ShoptableComponent,
    ShoptableFormComponent,
    BlogComponent,
    CardComponent,
    CardFormComponent,
    CarComponent,
    CarDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
