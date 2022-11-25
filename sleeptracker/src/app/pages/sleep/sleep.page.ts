import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SleepComponentComponent } from '../../components/sleep-component/sleep-component.component';
import { OvernightSleepData } from '../../data/overnight-sleep-data';
import { SleepService } from '../../services/sleep.service';

@Component({
  selector: 'app-sleep',
  templateUrl: './sleep.page.html',
  styleUrls: ['./sleep.page.scss'],
})
export class SleepPage implements OnInit {
  sleepArray:OvernightSleepData[];
  //i:number;

  constructor(private modalCtrl:ModalController, private sleepService:SleepService) { }

  ngOnInit() {
    this.sleepArray = SleepService.AllOvernightData;

    //Convert the string date to date format
    /*for(this.i=0; this.i < this.sleepArray.length; this.i++) {
      this.sleepArray[this.i].loggedAt = new Date(this.sleepArray[this.i].loggedAt);
      this.sleepArray[this.i].sleepEnd = new Date(this.sleepArray[this.i].sleepEnd);
      this.sleepArray[this.i].sleepStart = new Date(this.sleepArray[this.i].sleepStart);
    }*/
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: SleepComponentComponent
    });

    await modal.present();
  }

}
