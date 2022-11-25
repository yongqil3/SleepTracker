import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SleepinessComponentComponent } from '../../components/sleepiness-component/sleepiness-component.component';
import { StanfordSleepinessData } from '../../data/stanford-sleepiness-data';
import { SleepService } from '../../services/sleep.service';

@Component({
  selector: 'app-sleepiness',
  templateUrl: './sleepiness.page.html',
  styleUrls: ['./sleepiness.page.scss'],
})
export class SleepinessPage implements OnInit {
  sleepinessArray: StanfordSleepinessData[];
  //i:number;

  constructor(private modalCtrl:ModalController, private sleepService:SleepService) { }

  ngOnInit() {
    this.sleepinessArray = SleepService.AllSleepinessData;

    //Convert the string date to date format
    /*for(this.i=0; this.i < this.sleepinessArray.length; this.i++) {
      this.sleepinessArray[this.i].loggedAt = new Date(this.sleepinessArray[this.i].loggedAt);
    }*/
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: SleepinessComponentComponent
    });

    await modal.present();
  }

}
