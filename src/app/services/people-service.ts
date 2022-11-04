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
      picture:"../assets/cocinero1.jpg"
    },
    {
      id:2,
      name:"Álvaro",
      surname:"Linero",
      position:"Auxiliar",
      picture:"../assets/cocinero2.jpg"
    },
    {
      id:3,
      name:"Fruela",
      surname:"Domínguez",
      position:"Cocinera",
      picture:"../assets/cocinero3.jpg"  
    }
  ];
  
  id:number = this._people.length+1;

  constructor() { }

  public getPeople(): Person[] {
    return this._people;
  }

  public getPeopleById(id: number){
    return this._people.find(p=>p.id==id);
  }

  addUser(user: Person){
    user.id = this.id++;
    this._people.push(user);
  }

  updateUser(user: Person){
    var _user = this._people.find(p=>p.id==user.id);
    if(_user){
      _user.name = user.name;
      _user.surname = user.surname;
    }
    
  }

  deleteUserById(id:number){
    this._people = this._people.filter(p=>p.id != id); 
  }
}