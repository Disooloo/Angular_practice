import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import {HttpClientModule} from "@angular/common/http";
import { TodoFormComponent } from './todo-form/todo-form.component';
import {FormsModule} from "@angular/forms";
import {TodosFilperPipe} from "./service/todos.filper.pipe";

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoFormComponent,
    TodosFilperPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
