import { Injectable } from '@angular/core';
import { Task } from '../models/task-model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private _task: Task[] = [
    {
      id:1,
      name:"Bocadillo de tortilla",
      description:"Hecho con pan horneado en el día de nuestras panificadoras proveedoras, con su tortilla hecha al punto ideal para los amantes de la tortilla. Es lo que más se piden nuestros clientes.",
      quantity:1
    },
    {
      id:2,
      name:"Churros",
      description:"Churros hechos con cariño como los recuerdas con los mejores ingredientes.",
      quantity:4
    },
    {
      id:3,
      name:"Café bombón",
      description:"Café con leche condensada, para los más golosos.",
      quantity:3
    }
  ];
  id:number = this._task.length+1;
  constructor(){}
  
  public getTasks() : Task[]{
    return this._task;
  }

  public getTaskById(id:number){
    return this._task.find(p=>p.id==id);
  }

  public deleteTaskById(id:number){
    this._task = this._task.filter(p=>p.id != id); 
  }

  public addTask(task:Task){
    task.id = this.id++;
    this._task.push(task);
  }

  public updateTask(task:Task){
    var _task = this._task.find(p=>p.id==task.id);
    if(_task){
      _task.name = task.name;
      _task.description= task.description;
      _task.quantity= task.quantity;
      _task.picture = task.picture;
    }
    
  }
}
