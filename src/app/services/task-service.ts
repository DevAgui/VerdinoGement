import { Injectable } from '@angular/core';
import { Task } from '../models/task-model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private _task: Task[] = [
    {
      id:1,
      taskName:"Bocadillo de tortilla",
      taskDescription:"Para los amantes de la tortilla a cualquier hora.",
      taskSeconds: 600,
      taskImage:"../assets/tortilla.jpg"
    },
    {
      id:2,
      taskName:"Churros",
      taskDescription:"Churros hechos con cariño como los recuerdas con los mejores ingredientes.",
      taskSeconds: 600,
      taskImage:"../assets/churros.jpg"
    },
    {
      id:3,
      taskName:"Café bombón",
      taskDescription:"Café con leche condensada, para los más golosos.",
      taskSeconds: 300,
      taskImage:"../assets/cafe-bombon.jpg"
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
      _task.taskName = task.taskName;
      _task.taskDescription= task.taskDescription;
      _task.taskSeconds= task.taskSeconds;
      _task.taskImage = task.taskImage;
    }
    
  }
}
