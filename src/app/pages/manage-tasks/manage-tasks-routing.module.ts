import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageTasksPage } from './manage-tasks.page';

const routes: Routes = [
  {
    path: '',
    component: ManageTasksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageTasksPageRoutingModule {}
