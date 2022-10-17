import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManagePeoplePageRoutingModule } from './manage-people-routing.module';

import { ManagePeoplePage } from './manage-people.page';
import { PersonComponent } from 'src/app/components/person/person.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManagePeoplePageRoutingModule 
  ],
  declarations: [ManagePeoplePage, PersonComponent]
})
export class ManagePeoplePageModule {}
