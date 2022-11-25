import { Injectable } from '@angular/core';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class SleepService {
	private static LoadDefaultData:boolean = true;
	public static AllSleepData:SleepData[] = [];
	public static AllOvernightData:OvernightSleepData[] = [];
	public static AllSleepinessData:StanfordSleepinessData[] = [];

	constructor() {
		/*if(SleepService.LoadDefaultData) {
			this.addDefaultData();
  		SleepService.LoadDefaultData = false;
  	}*/
    this.getLocalStorage();

    //Clear local storage
    /*Storage.clear().then(() => {
      console.log('cleared');
    });*/
    console.log("hello from the outside")
	}

	private addDefaultData() {
		this.logOvernightData(new OvernightSleepData(new Date('February 18, 2021 01:03:00'), new Date('February 18, 2021 09:25:00')));
		this.logSleepinessData(new StanfordSleepinessData(4, new Date('February 19, 2021 14:38:00')));
		this.logOvernightData(new OvernightSleepData(new Date('February 20, 2021 23:11:00'), new Date('February 21, 2021 08:03:00')));
	}

	public logOvernightData(sleepData:OvernightSleepData) {
		SleepService.AllSleepData.push(sleepData);
		SleepService.AllOvernightData.push(sleepData);
    //Save to local storage
    Storage.set({key: 'AllOvernightData', value: JSON.stringify(SleepService.AllOvernightData)}).then(() => {
      console.log('Sleep data saved to local storage');
    });
    Storage.set({key: 'AllSleepData', value: JSON.stringify(SleepService.AllOvernightData)}).then(() => {
      console.log('Sleep data saved to local storage');
    });

  }

	public logSleepinessData(sleepData:StanfordSleepinessData) {
		SleepService.AllSleepData.push(sleepData);
		SleepService.AllSleepinessData.push(sleepData);
    //Save to local storage
    Storage.set({key: 'AllSleepinessData', value: JSON.stringify(SleepService.AllSleepinessData)}).then(() => {
      console.log('Sleepiness data saved to local storage');
    });
    Storage.set({key: 'AllSleepData', value: JSON.stringify(SleepService.AllSleepinessData)}).then(() => {
      console.log('Sleepiness data saved to local storage');
    });
	}

  public getLocalStorage() {
    Storage.get({ key: 'AllOvernightData'}).then(item => {
      let values = JSON.parse(item.value);
      if(values){
        values.forEach(value => {
          let tempData:OvernightSleepData = new OvernightSleepData(new Date(value['sleepStart']), new Date(value['sleepEnd']));
          SleepService.AllSleepData.push(tempData);
          SleepService.AllOvernightData.push(tempData);
        });
      }
    });

    Storage.get({ key: 'AllSleepinessData'}).then(item => {
      let values = JSON.parse(item.value);
      if(values){
        values.forEach(value => {
          let tempData:StanfordSleepinessData = new StanfordSleepinessData(value['loggedValue'], new Date(value['loggedAt']));
          SleepService.AllSleepData.push(tempData);
          SleepService.AllSleepinessData.push(tempData);
        });
      }
    });
  }

}








//Get OvernightSleepData data from local storage
/*Storage.clear().then(() => {
  console.log('cleared');
});*/
/*
Storage.get({ key: 'AllOvernightData'}).then(item => {
  let values = JSON.parse(item.value);
  if(values){
    SleepService.AllOvernightData = values;
    console.log(SleepService.AllOvernightData);
  }
});

//Get AllSleepinessData data from local storage
Storage.get({ key: 'AllSleepinessData'}).then(item => {
  let values = JSON.parse(item.value);
  if(values) {
    SleepService.AllSleepinessData = values;
    console.log(SleepService.AllSleepinessData);
  }
});

//Get AllSleepData data from local storage
Storage.get({ key: 'AllSleepData'}).then(item => {
  let values = JSON.parse(item.value);
  if(values) {
    SleepService.AllSleepData = values;
    console.log(SleepService.AllSleepData);
  }
});












//Save AllOvernightData to local storage
Storage.set({key: 'AllOvernightData', value: JSON.stringify(SleepService.AllOvernightData)}).then(() => {
  console.log('Sleep data saved to local storage');
});
Storage.set({key: 'AllSleepData', value: JSON.stringify(SleepService.AllOvernightData)}).then(() => {
  console.log('Sleep data saved to local storage');
});
//Save AllSleepinessData to local storage
Storage.set({key: 'AllSleepinessData', value: JSON.stringify(SleepService.AllSleepinessData)}).then(() => {
  console.log('Sleepiness data saved to local storage');
});
Storage.set({key: 'AllSleepData', value: JSON.stringify(SleepService.AllSleepinessData)}).then(() => {
  console.log('Sleepiness data saved to local storage');
});
*/
