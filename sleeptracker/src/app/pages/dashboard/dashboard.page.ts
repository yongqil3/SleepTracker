import { Component, OnInit } from '@angular/core';
import { StanfordSleepinessData } from '../../data/stanford-sleepiness-data';
import { OvernightSleepData } from '../../data/overnight-sleep-data';
import { SleepService } from '../../services/sleep.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  sleepinessArray: StanfordSleepinessData[];
  sleepArray: OvernightSleepData[];
  //recentSleepiness: StanfordSleepinessData;
  //recentSleep: OvernightSleepData;

  constructor(private sleepService:SleepService) { }

  ngOnInit() {
    this.sleepinessArray = SleepService.AllSleepinessData;
    this.sleepArray = SleepService.AllOvernightData;

    //this.recentSleepiness = this.sleepinessArray[this.sleepinessArray.length - 1];


  }

  getRecentSleepHour():string {
    let recentSleep = this.sleepArray[this.sleepArray.length - 1];
    return recentSleep?.summaryString();
  }

  getRecentSleepExactlyTime():string {
    let recentSleep = this.sleepArray[this.sleepArray.length - 1];
    return recentSleep?.timeString();
  }

  getRecentSleepinessValue():string {
    let recentSleepiness = this.sleepinessArray[this.sleepinessArray.length - 1];
    return recentSleepiness?.loggedValueString();
  }

  getRecentSleepinessQuality():string {
    let recentSleepiness = this.sleepinessArray[this.sleepinessArray.length - 1];
    return recentSleepiness?.ratingString();
  }

}
