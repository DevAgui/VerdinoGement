import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'manage-people',
    loadChildren: () => import('./pages/manage-people/manage-people.module').then( m => m.ManagePeoplePageModule)
  },
  {
    path: 'assign-tasks',
    loadChildren: () => import('./pages/assign-tasks/assign-tasks.module').then( m => m.AssignTasksPageModule)
  },
  {
    path: 'manage-tasks',
    loadChildren: () => import('./pages/manage-tasks/manage-tasks.module').then( m => m.ManageTasksPageModule)
  },
  {
    path: 'view-tasks',
    loadChildren: () => import('./pages/view-tasks/view-tasks.module').then( m => m.ViewTasksPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
