import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssignTasksPage } from './assign-tasks.page';

const routes: Routes = [
  {
    path: '',
    component: AssignTasksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssignTasksPageRoutingModule {}
