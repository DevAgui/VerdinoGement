import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/models/task-model';
import { TaskService } from 'src/app/services/task-service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {

  @Output() onEdit = new EventEmitter;
  @Output() onDelete = new EventEmitter;
  @Input() task: Task;
  
  constructor(
    taskSvc:TaskService,
  ) { }

  ngOnInit() {}

  onEditClick(){
    
    this.onEdit.emit(this.task);
  }

  onDeleteClick(){
    this.onDelete.emit(this.task);
  }

}
