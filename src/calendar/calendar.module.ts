import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Calendar } from './calendar';
import { monthName } from './pipes/month-name';
import {weekdayName} from "./pipes/weekday-name";
@NgModule({
  declarations: [
    Calendar,
    monthName,
    weekdayName
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    Calendar,
    monthName,
    weekdayName
  ]
})
export class CalendarModule { }
