import { Component, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { IonReorderGroup } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild(IonReorderGroup,{static: false}) reorderGroup: IonReorderGroup;


  constructor(public alertController: AlertController) { }

  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Ok',
          cssClass: 'secondary',
          handler: () => {
            console.log('Ok Button');
          }
        },
        {
          text: 'Cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancel Button');
          }
        },
        {
          text: 'Trash',
          cssClass: 'secondary',
          handler: () => {
            console.log('Trash Button');
          },
        }]
    });

    await alert.present();
  }

  doReorder(ev: any) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    ev.detail.complete();
  }

  toggleReorderGroup() {
    this.reorderGroup.disabled = !this.reorderGroup.disabled;
  }
}
