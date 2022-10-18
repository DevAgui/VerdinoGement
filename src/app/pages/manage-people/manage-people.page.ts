import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from 'src/app/models/person-model';
import { PeopleService } from 'src/app/services/people-service';
import { PersonDetailComponent } from 'src/app/components/person-detail/person-detail.component';
import { AlertController, ModalController } from '@ionic/angular';
@Component({
  selector: 'app-manage-people',
  templateUrl: './manage-people.page.html',
  styleUrls: ['./manage-people.page.scss'],
})
export class ManagePeoplePage implements OnInit {
  
  @Input() person:Person;

  constructor(
    private personSrv:PeopleService,
    private modal:ModalController,
    private alert:AlertController
    ) { }


  ngOnInit() {
  }

  getPeople():Person[]{ 
    return this.personSrv.getPeople(); 
  }
  async presentPersonForm(person:Person){
    const modal = await this.modal.create({
      component:PersonDetailComponent,
      componentProps:{
        person:person
      }
    });
    modal.present();
    modal.onDidDismiss().then(result=>{
      if(result && result.data){
        switch(result.data.mode){
          case 'New':
            this.personSrv.addPerson(result.data.person);
            break;
          case 'Edit':
            this.personSrv.updatePerson(result.data.person);
            break;
          default:
        }
      }
    });
  }
  
  onNewPerson(){
    this.presentPersonForm(null);  
  }

  onEditPerson(person){
    this.presentPersonForm(person);
  }
  onDeletePerson(person){
    this.onDeleteAlert(person);
     
   }
   

  async onDeleteAlert(person){
    const alert = await this.alert.create({
      header: 'Do you really want to eliminate this person?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log("Cancelled");
          },
        },
        {
          text: 'Delete',
          role: 'confirm',
          handler: () => {
            this.personSrv.deletePersonById(person.id);
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }
  


}
