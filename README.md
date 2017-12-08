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

- Basic usage:

``` javascript
<ion-calendar #calendar></ion-calendar>
```

- Create a jump button to go to today

``` javascript
<button ion-button clear (click)="calendar.today()">Today</button>
```

- In order to retrieve information about the tapped day, console logs by default.

``` javascript
<ion-calendar #calendar (onDaySelect)="onDaySelect($event)"></ion-calendar>
```

- Add in events (an array of objects, year, month, date - integers for each) - for example:
``` javascript
  this.currentEvents = [
    {
      year: 2017,
      month: 11,
      date: 25
    },
    {
      year: 2017,
      month: 11,
      date: 26
    }
  ];
```
- Usage:
``` javascript
<ion-calendar #calendar [events]="currentEvents" (onDaySelect)="onDaySelect($event)" (onMonthSelect)="onMonthSelect($event)"></ion-calendar>
```
- You will need the `onMonthSelect` emitter to establish what dates to look for in your event listing API, it exposes a simple callback of the year and month per switch back and forth.

``` javascript
<ion-calendar #calendar (onDaySelect)="onDaySelect($event)"></ion-calendar>
```

- Restart Ionic Serve or Ionic Lab, first time.

## Update

- 8th December 2017

  * Added Events capability

- 5th December 2017

  * Added English comments to code
  * Added English month names instead of numerals on FE
  * Minor color adjustments for legibility

## Credits

- Original by @laker007 at https://github.com/laker007/ionic3-calendar
