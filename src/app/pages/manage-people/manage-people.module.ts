import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManagePeoplePageRoutingModule } from './manage-people-routing.module';

import { ManagePeoplePage } from './manage-people.page';
import { PersonComponent } from 'src/app/components/person/person.component';
import { PersonDetailComponent } from 'src/app/components/person-detail/person-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManagePeoplePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ManagePeoplePage, PersonComponent,PersonDetailComponent]
})
export class ManagePeoplePageModule {}
