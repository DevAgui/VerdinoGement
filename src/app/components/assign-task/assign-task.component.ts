import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AssignTaskService } from 'src/app/services/assign-task';
import { AssignTask } from 'src/app/models/assign-task';

@Component({
  selector: 'app-assign-task',
  templateUrl: './assign-task.component.html',
  styleUrls: ['./assign-task.component.scss'],
})
export class AssignTaskComponent implements OnInit {

  @Output() onEdit = new EventEmitter;
  @Output() onDelete = new EventEmitter;
  @Input() taskAssigned: AssignTaskComponent;
  
  constructor(
    assignedTaskSvc:AssignTaskService,
  ) { }

  ngOnInit() {}

  onEditClick(){
    
    this.onEdit.emit(this.taskAssigned);
  }

  onDeleteClick(){
    this.onDelete.emit(this.taskAssigned);
  }
  
}