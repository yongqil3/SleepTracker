import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SleepinessPageRoutingModule } from './sleepiness-routing.module';
import { SleepinessPage } from './sleepiness.page';
import { SleepinessComponentComponent } from '../../components/sleepiness-component/sleepiness-component.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SleepinessPageRoutingModule
  ],
  declarations: [SleepinessPage, SleepinessComponentComponent],
  entryComponents: [SleepinessComponentComponent]
})
export class SleepinessPageModule {}
