import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ModalController } from '@ionic/angular';
import { Task } from 'src/app/models/task-model';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss'],
})
export class TaskDetailComponent implements OnInit {

  form:FormGroup;
  mode:"New" | "Edit" = "New";
  @Input('task') set task(task:Task){
    if(task){
      this.form.controls.id.setValue(task.id);
      this.form.controls.taskName.setValue(task.taskName);
      this.form.controls.taskDescription.setValue(task.taskDescription);
      this.form.controls.taskSeconds.setValue(task.taskSeconds);
      this.mode = "Edit";
    }
  }
  

  constructor(
    private fb:FormBuilder,
    private modal:ModalController
  ) { 
    this.form = this.fb.group({
      id:[null],
      taskName:['', [Validators.required]],
      taskDescription:['', [Validators.required]],
      taskSeconds:['', [Validators.required]],
      taskImage:['']
    });
  }

  ngOnInit() {

  }
  onSubmit(){
    
    this.modal.dismiss({task: this.form.value, mode:this.mode}, 'ok');
  }

  onDismiss(result){
    this.modal.dismiss(null, 'cancel');
  }

}
