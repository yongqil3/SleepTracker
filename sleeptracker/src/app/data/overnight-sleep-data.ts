import { SleepData } from './sleep-data';

export class OvernightSleepData extends SleepData {
	private sleepStart:Date;
	private sleepEnd:Date;

	constructor(sleepStart:Date, sleepEnd:Date) {
		super();
		this.sleepStart = sleepStart;
		this.sleepEnd = sleepEnd;
	}

	summaryString():string {
		var sleepStart_ms = this.sleepStart.getTime();
		var sleepEnd_ms = this.sleepEnd.getTime();

		// Calculate the difference in milliseconds
		var difference_ms = sleepEnd_ms - sleepStart_ms;

		// Convert to hours and minutes
		//return Math.floor(difference_ms / (1000*60*60)) + " hours, " + Math.floor(difference_ms / (1000*60) % 60) + " minutes.";
		// Return just the hours
		return Math.floor(difference_ms / (1000*60*60)).toString();
	}

	dateString():string {
		//return "Night of " + this.sleepStart.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
		return this.sleepStart.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
	}

	timeString():string {
		let tempSleepStartMinute;
		let tempSleepEndMinute;
		//Format the start time if the minute is less than 10
		if(this.sleepStart.getMinutes() < 10)
			tempSleepStartMinute = '0' + this.sleepStart.getMinutes();
		else
			tempSleepStartMinute = this.sleepStart.getMinutes();
		//Format the end time if the minute is less than 10
		if(this.sleepEnd.getMinutes() < 10)
			tempSleepEndMinute = '0' + this.sleepEnd.getMinutes();
		else
			tempSleepEndMinute = this.sleepEnd.getMinutes();

		return this.sleepStart.getHours() + ":" + tempSleepStartMinute + "-" + this.sleepEnd.getHours() + ":" + tempSleepEndMinute;
	}

	getHour():number {
		var sleepStart_ms = this.sleepStart.getTime();
		var sleepEnd_ms = this.sleepEnd.getTime();

		// Calculate the difference in milliseconds
		var difference_ms = sleepEnd_ms - sleepStart_ms;

		// Convert to hours and minutes
		return Math.floor(difference_ms / (1000*60*60));
	}

	ratingString():string {
		if(0 <= this.getHour() && this.getHour() <= 4) {
			return "Poor"
		}
		else if(5 <= this.getHour() && this.getHour() <= 6) {
			return "Average"
		}
		else {
			return "Good"
		}
	}
	
}
