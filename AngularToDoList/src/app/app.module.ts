import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TaskContainerComponent } from './task-container/task-container.component';
import { TasksContainerComponent } from './tasks-container/tasks-container.component';
import { TaskComponent } from './task/task.component'
import {TaskService} from "./task.service";
import {ApiService} from "./api.service";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    HomeComponent,
    NotFoundComponent,
    TaskContainerComponent,
    TasksContainerComponent,
    TaskComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    TaskService,
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
