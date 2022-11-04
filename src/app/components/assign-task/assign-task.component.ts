import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Assignment } from 'src/app/models/assignment-model';
import { PeopleService } from 'src/app/services/people-service';
import { TaskService } from 'src/app/services/task-service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assign-task.component.html',
  styleUrls: ['./assign-task.component.scss'],
})
export class AssignmentComponent implements OnInit {
  @Output() onEdit = new EventEmitter;
  @Output() onDelete = new EventEmitter;
  @Input() assign : Assignment; 

  constructor(private userSVC: PeopleService, private taskService: TaskService) { }


  ngOnInit() { }

  getUserSVC(id:number){
    return this.userSVC.getPeopleById(id);
  }
  getTaskService(id:number){
    return this.taskService.getTaskById(id);
  }
  onEditClick(){
    this.onEdit.emit(this.assign);
  }
  onDeleteClick(){
    this.onDelete.emit(this.assign);
  }

}