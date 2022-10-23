import { Injectable } from '@angular/core';
import { Person } from '../models/person-model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private _people: Person[] = [
    {
      id:1,
      name:"Diego",
      surname:"Aguilera",
      position:"Cocinero",
      picture:"https://thispersondoesnotexist.com/image"
    },
    {
      id:2,
      name:"Álvaro",
      surname:"Linero",
      position:"Auxiliar",
      picture:"https://thispersondoesnotexist.com/image"
    },
    {
      id:3,
      name:"Fruela",
      surname:"Domínguez",
      position:"Cocinera",
      picture:"https://thispersondoesnotexist.com/image"  
    }
  ];
  
  id:number = this._people.length+1;
  constructor(){}
  
  public getPeople() : Person[]{
    return this._people;
  }

  public getPersonById(id:number){
    return this._people.find(p=>p.id==id);
  }

  public deletePersonById(id:number){
    this._people = this._people.filter(p=>p.id != id); 
  }

  public addPerson(person:Person){
    person.id = this.id++;
    this._people.push(person);
  }

  public updatePerson(person:Person){
    var _person = this._people.find(p=>p.id==person.id);
    if(_person){
      _person.name = person.name;
      _person.surname = person.surname;
      _person.position = person.position;
    }
    
  }
}
