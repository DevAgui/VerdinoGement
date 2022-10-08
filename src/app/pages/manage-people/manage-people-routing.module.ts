import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagePeoplePage } from './manage-people.page';

const routes: Routes = [
  {
    path: '',
    component: ManagePeoplePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagePeoplePageRoutingModule {}
