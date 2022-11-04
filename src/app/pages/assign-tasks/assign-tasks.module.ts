import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssignTasksPageRoutingModule } from './assign-tasks-routing.module';

import { AssignPage } from './assign-tasks.page';
import { AssignmentComponent } from 'src/app/components/assign-task/assign-task.component';
import { AssignmentDetailsComponent } from 'src/app/components/assign-task-detail/assign-task-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssignTasksPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AssignPage, AssignmentComponent, AssignmentDetailsComponent]
})
export class AssignTasksPageModule {}
