import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManagePeoplePageRoutingModule } from './manage-people-routing.module';

import { ManagePeoplePage } from './manage-people.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManagePeoplePageRoutingModule
  ],
  declarations: [ManagePeoplePage]
})
export class ManagePeoplePageModule {}
