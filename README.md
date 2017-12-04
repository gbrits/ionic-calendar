# ionic-calendar

![image](https://raw.githubusercontent.com/gbrits/ionic-calendar/master/calendar.png?raw=true)

## Usage

- npm install ionic3-calendar-en --save (in ionic project folder)
- in app.module.ts

``` javascript
import { CalendarModule } from 'ionic3-calendar-en';

  @NgModule({
    ...
  imports: [
    ...
    CalendarModule,
    ...
  ]
    ...
  })
```

- Push component to anywhere you want to display it

``` javascript
<ion-calendar #calendar></ion-calendar>
```

- Go Today

``` javascript
<button ion-button clear (click)="calendar.today()">Today</button>
```

- Click The Day And Get The Day

``` javascript
<ion-calendar #calendar (onDaySelect)="onDaySelect($event)"></ion-calendar>
```

- In The End
  Restart Ionic Serve

## Update

- 5th December 2017

  * Added English comments to code
  * Added English month names instead of numerals on FE
  * Minor color adjustments for legibility

## Credits

- Original by @laker007 at https://github.com/laker007/ionic3-calendar
