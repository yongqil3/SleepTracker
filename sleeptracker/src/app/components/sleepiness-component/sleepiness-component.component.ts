import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { defineCustomElements } from '@teamhive/lottie-player/loader';
import { StanfordSleepinessData } from '../../data/stanford-sleepiness-data';
import { SleepService } from '../../services/sleep.service';
import { ToastController } from '@ionic/angular';


defineCustomElements(window);

@Component({
  selector: 'app-sleepiness-component',
  templateUrl: './sleepiness-component.component.html',
  styleUrls: ['./sleepiness-component.component.scss'],
})
export class SleepinessComponentComponent implements OnInit {
  level:number;
  dateLogged:Date;
  currentSleepinessData: StanfordSleepinessData;

  constructor(private modalCtrl: ModalController, private sleepService:SleepService, public toastController: ToastController) { }

  ngOnInit() {
    this.level = 1;
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
    this.dateLogged = new Date();

    console.log("this is level");
    console.log(this.level);


    this.currentSleepinessData = new StanfordSleepinessData(this.level, this.dateLogged);
    this.sleepService.logSleepinessData(this.currentSleepinessData);
    this.presentToast(2000, 'Your entry has been saved!', 'success');
    //Dismiss the modal
    this.modalCtrl.dismiss();

    //For debugging purposes
    console.log(this.level);
    console.log(typeof this.level);
    //console.log(SleepService.AllSleepinessData);

  }

}
