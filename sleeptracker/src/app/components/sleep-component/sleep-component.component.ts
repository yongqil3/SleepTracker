import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { defineCustomElements } from '@teamhive/lottie-player/loader';
import { OvernightSleepData } from '../../data/overnight-sleep-data';
import { SleepService } from '../../services/sleep.service';
import { ToastController } from '@ionic/angular';


defineCustomElements(window);

@Component({
  selector: 'app-sleep-component',
  templateUrl: './sleep-component.component.html',
  styleUrls: ['./sleep-component.component.scss'],
})
export class SleepComponentComponent implements OnInit{
  startDateString:string;
  endDateString:string;
  startDateConverted:Date;
  endDateConverted:Date;
  currentOvernightSleepData: OvernightSleepData;

  constructor(private modalCtrl: ModalController, private sleepService:SleepService, public toastController: ToastController) { }

  ngOnInit() {
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

  async presentToast(duration_:number, message_:string, color_:string) {
    const toast = await this.toastController.create({
      message: message_,
      position: 'top',
      color: color_,
      duration: duration_
    });
    toast.present();
  }

  submitClicked() {
    this.startDateConverted = new Date(this.startDateString);
    this.endDateConverted = new Date(this.endDateString);

    if(this.startDateConverted > this.endDateConverted) {
      this.presentToast(2000, 'Make sure the end date is later than start date.', 'danger');
    }
    else {
      this.currentOvernightSleepData = new OvernightSleepData(this.startDateConverted, this.endDateConverted);
      this.sleepService.logOvernightData(this.currentOvernightSleepData);
      this.presentToast(2000, 'Your entry has been saved!', 'success');
      //Dismiss the modal
      this.modalCtrl.dismiss();
    }

    //For debugging purposes
    //console.log(SleepService.AllOvernightData);
  }

}
