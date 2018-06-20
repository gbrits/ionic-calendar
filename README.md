# Ionic Calendar (English and Spanish)

![image](https://raw.githubusercontent.com/gbrits/ionic-calendar/master/calendar.png?raw=true)

A straight forward calendar module that has the optional capability to expand to *clickable days* and trackable *events*, with unobtrusive boiler-plating.

## Ionic Support

This module was tested to Ionic v3.19.0.

### Installing

Go ahead and install via NPM

```
npm install ionic3-calendar-en --save
```

Within your **app.module.ts** file, make sure to add the import.

```javascript
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

## Usage / Getting started

Basic usage is as follows:

```javascript

<ion-calendar #calendar></ion-calendar>

<ion-calendar #calendar lang="es"></ion-calendar> // Spanish support

<ion-calendar #calendar lang="en"></ion-calendar> // Or you can explicitly indicate English

```

To make days clickable, and emit back information about the day selected, include the onDaySelect binding.

```javascript
<ion-calendar #calendar (onDaySelect)="onDaySelect($event)"></ion-calendar>
```

You can add a button to jump to today, for ease of navigation:

```javascript
<button ion-button (click)="calendar.today()">Jump to Today</button>
```

### Events

Adding events to the calendar, as seen in the screenshot atop, those tiny notification blips can appear on a given day, if your backend API responds with the right date makeup for the given month. I suggest you write something that provides data for the former and the latter month, for the sake of edge days on a given month. The month number starts from 0 for January to 11 for December.

Accepted format of data:

```javascript
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

The consequent invocation of these events would be done like so:

```javascript
<ion-calendar #calendar [events]="currentEvents" (onDaySelect)="onDaySelect($event)" (onMonthSelect)="onMonthSelect($event)"></ion-calendar>
```

### Changelog

> 20th June 2018
>> Language prop added, Spanish supported.

> 8th December 2017
>> Added Events capability

> 5th December 2017
>> Added English comments to code
>> Added English month names instead of numerals on FE
>> Minor colour adjustments for legibility

## Authors

* **Laker Liu** - *Initial work* - [Ionic3-Calendar](https://github.com/laker007/ionic3-calendar)

**It's not what you start in life, it's what you finish.**

