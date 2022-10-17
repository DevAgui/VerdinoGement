import { Injectable } from '@angular/core';
import { Person } from '../models/person-model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private _people: Person[] = [
    {
      id:1,
      name:"Juan",
      surname:"García",
      nickname:"Juanarrow"
    },
    {
      id:2,
      name:"Pedro",
      surname:"Cueto",
      nickname:"Pedrin"
    },
    {
      id:3,
      name:"Antonio",
      surname:"Gutiérrez",
      nickname:"Toño"
    }
  ];

  constructor(){}
  
  public getPeople() : Person[]{
    return this._people;
  }

}
