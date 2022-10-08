import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageTasksPageRoutingModule } from './manage-tasks-routing.module';

import { ManageTasksPage } from './manage-tasks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageTasksPageRoutingModule
  ],
  declarations: [ManageTasksPage]
})
export class ManageTasksPageModule {}
