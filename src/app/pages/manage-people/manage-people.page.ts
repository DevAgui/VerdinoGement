import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person-model';
import { PeopleService } from 'src/app/services/people-service';

@Component({
  selector: 'app-manage-people',
  templateUrl: './manage-people.page.html',
  styleUrls: ['./manage-people.page.scss'],
})
export class ManagePeoplePage implements OnInit {

  _person:Person[];
  constructor(private personSrv:PeopleService) { }


  ngOnInit() {
  }

  getPeople():Person[]{ 
    return this.personSrv.getPeople(); 
  }
  
}
