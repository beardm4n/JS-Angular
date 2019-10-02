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

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    HomeComponent,
    NotFoundComponent,
    TaskContainerComponent,
    TasksContainerComponent,
    TaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
