import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person-model';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent implements OnInit {

  @Input() people : Person;
  constructor() { }

  ngOnInit() {}

}
