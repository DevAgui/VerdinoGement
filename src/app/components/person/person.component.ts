import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person-model';
import { IonicModule } from '@ionic/angular';
import { PeopleService } from 'src/app/services/people-service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent implements OnInit {

  @Input() people: Person;
  
  constructor(
    peopleSvc:PeopleService
  ) { }

  ngOnInit() {}

}
