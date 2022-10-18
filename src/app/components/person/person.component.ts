import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from 'src/app/models/person-model';
import { PeopleService } from 'src/app/services/people-service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent implements OnInit {
  
  @Output() onEdit = new EventEmitter;
  @Output() onDelete = new EventEmitter;
  @Input() people: Person;
  
  constructor(
    peopleSvc:PeopleService,
  ) { }

  ngOnInit() {}

  onEditClick(){
    
    this.onEdit.emit(this.people);
  }

  onDeleteClick(){
    this.onDelete.emit(this.people);
  }
  
}

