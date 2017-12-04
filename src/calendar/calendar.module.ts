import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Calendar } from './calendar';
import { monthName } from './pipes/month-name';
@NgModule({
  declarations: [
    Calendar,
    monthName
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    Calendar,
    monthName
  ]
})
export class CalendarModule { }
