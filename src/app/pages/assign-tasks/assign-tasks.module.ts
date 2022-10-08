import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssignTasksPageRoutingModule } from './assign-tasks-routing.module';

import { AssignTasksPage } from './assign-tasks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssignTasksPageRoutingModule
  ],
  declarations: [AssignTasksPage]
})
export class AssignTasksPageModule {}
