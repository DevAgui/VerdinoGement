import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Assignment } from 'src/app/models/assignment-model';
import { PeopleService } from '../../services/people-service';
import { TaskService } from '../../services/task-service';


@Component({
  selector: 'app-assigment-details',
  templateUrl: './assign-task-detail.component.html',
  styleUrls: ['./assign-task-detail.component.scss'],
})
export class AssignmentDetailsComponent implements OnInit {

  form:FormGroup;
  mode: "New" | "Edit" = "New";

  

  @Input('assign') set assign(assign:Assignment){
    if(assign){
      this.form.controls.id.setValue(assign.id);
      this.form.controls.personId.setValue(assign.personId);
      this.form.controls.taskId.setValue(assign.taskId);
      this.mode = "Edit";
    }

  }
  constructor(private formBuilder:FormBuilder,
              private modal:ModalController
    ) {
    this.form = this.formBuilder.group({ 
      id:[null],
      personId:[0,Validators.min(1)],
      taskId:[0,Validators.min(1)]
    });
  }

  ngOnInit() {}

  onSubmit(){
    console.log(this.form.value)
      this.modal.dismiss({assign: this.form.value, mode: this.mode}, 'ok')
  }

  onDismiss(result){
    this.modal.dismiss(null,'cancel'); 
  }


}