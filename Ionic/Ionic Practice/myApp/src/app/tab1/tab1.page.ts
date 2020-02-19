import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';






@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

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

}
