import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { TaskDetailComponent } from 'src/app/components/task-detail/task-detail.component';
import { Task } from 'src/app/models/task-model';
import { TaskService } from 'src/app/services/task-service';

@Component({
  selector: 'app-manage-tasks',
  templateUrl: './manage-tasks.page.html',
  styleUrls: ['./manage-tasks.page.scss'],
})
export class ManageTasksPage implements OnInit {

  @Input() task:Task;

  constructor(
    private taskSrv:TaskService,
    private modal:ModalController,
    private alert:AlertController
    ) { }


  ngOnInit() {
  }

  getTask():Task[]{ 
    return this.taskSrv.getTasks(); 
  }
  async presentTaskForm(task:Task){
    const modal = await this.modal.create({
      component:TaskDetailComponent,
      componentProps:{
        task:task
      }
    });
    modal.present();
    modal.onDidDismiss().then(result=>{
      if(result && result.data){
        switch(result.data.mode){
          case 'New':
            this.taskSrv.addTask(result.data.task);
            break;
          case 'Edit':
            this.taskSrv.updateTask(result.data.task);
            break;
          default:
        }
      }
    });
  }
  
  onNewTask(){
    this.presentTaskForm(null);  
  }

  onEditTask(task){
    this.presentTaskForm(task);
  }
  onDeleteTask(task){
    this.onDeleteAlert(task);
     
   }
   

  async onDeleteAlert(task){
    const alert = await this.alert.create({
      header: '¿Seguro que quieres eliminar esta comanda?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log("Cancelado");
          },
        },
        {
          text: 'Eliminar',
          role: 'confirm',
          handler: () => {
            this.taskSrv.deleteTaskById(task.id);
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }
  
}
