import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ManageTasksPageRoutingModule } from './manage-tasks-routing.module';
import { ManageTasksPage } from './manage-tasks.page';
import { TaskComponent } from 'src/app/components/task/task.component';
import { TaskDetailComponent } from 'src/app/components/task-detail/task-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageTasksPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ManageTasksPage, TaskComponent, TaskDetailComponent]
})
export class ManageTasksPageModule {}
