var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';
import * as _ from "lodash";
var Calendar = (function () {
    function Calendar() {
        this.onDaySelect = new EventEmitter();
        this.onMonthSelect = new EventEmitter();
        this.events = [];
        this.currentYear = moment().year();
        this.currentMonth = moment().month();
        this.currentDate = moment().date();
        this.currentDay = moment().day();
        this.displayYear = moment().year();
        this.displayMonth = moment().month();
        this.dateArray = []; // Array for all the days of the month
        this.weekArray = []; // Array for each row of the calendar
        this.lastSelect = 0; // Record the last clicked location
        this.weekHead = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        this.today();
        this.createMonth(this.displayYear, this.displayMonth);
    }
    Calendar.prototype.ngOnChanges = function () {
        this.createMonth(this.displayYear, this.displayMonth);
    };
    Calendar.prototype.ngAfterContentInit = function () {
        console.info(this.lang);
        if (!this.lang) {
            this.lang = 'en';
        }
        if (this.lang === 'es') {
            this.weekHead = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
        }
    };
    // Jump to today
    Calendar.prototype.today = function () {
        this.displayYear = this.currentYear;
        this.displayMonth = this.currentMonth;
        this.createMonth(this.currentYear, this.currentMonth);
        // Mark today as a selection
        var todayIndex = _.findIndex(this.dateArray, {
            year: this.currentYear,
            month: this.currentMonth,
            date: this.currentDate,
            isThisMonth: true
        });
        this.lastSelect = todayIndex;
        this.dateArray[todayIndex].isSelect = true;
        this.onDaySelect.emit(this.dateArray[todayIndex]);
    };
    Calendar.prototype.isInEvents = function (year, month, date) {
        var i = 0, len = this.events.length;
        for (; i < len; i++) {
            if (this.events[i].year == year && this.events[i].month == month && this.events[i].date == date) {
                return true;
            }
        }
        return false;
    };
    Calendar.prototype.createMonth = function (year, month) {
        this.dateArray = []; // Clear last month's data
        this.weekArray = []; // Clear week data
        var firstDay;
        // The day of the week on the first day of the current month of
        // selection determines how many days to take out last month. Sunday
        // does not show last month, Monday shows the previous month, Tuesday
        // shows the last two days
        var preMonthDays; // The number of days for the previous month
        var monthDays; // The number of days for the month
        var weekDays = [];
        firstDay = moment({ year: year, month: month, date: 1 }).day();
        // The number of days last month
        if (month === 0) {
            preMonthDays = moment({ year: year - 1, month: 11 }).daysInMonth();
        }
        else {
            preMonthDays = moment({ year: year, month: month - 1 }).daysInMonth();
        }
        // The number of days this month
        monthDays = moment({ year: year, month: month }).daysInMonth();
        // PREVIOUS MONTH
        // Add the last few days of the previous month to the array
        if (firstDay !== 7) {
            var lastMonthStart = preMonthDays - firstDay + 1; // From the last few months start
            for (var i = 0; i < firstDay; i++) {
                if (month === 0) {
                    this.dateArray.push({
                        year: year,
                        month: 11,
                        date: lastMonthStart + i,
                        isThisMonth: false,
                        isToday: false,
                        isSelect: false,
                        hasEvent: (this.isInEvents(year, 11, lastMonthStart + i)) ? true : false,
                    });
                }
                else {
                    this.dateArray.push({
                        year: year,
                        month: month - 1,
                        date: lastMonthStart + i,
                        isThisMonth: false,
                        isToday: false,
                        isSelect: false,
                        hasEvent: (this.isInEvents(year, month - 1, lastMonthStart + i)) ? true : false,
                    });
                }
            }
        }
        // Add the numeral for this month to the array
        for (var i = 0; i < monthDays; i++) {
            this.dateArray.push({
                year: year,
                month: month,
                date: i + 1,
                isThisMonth: true,
                isToday: false,
                isSelect: false,
                hasEvent: (this.isInEvents(year, month, i + 1)) ? true : false,
            });
        }
        if (this.currentYear === year && this.currentMonth === month) {
            var todayIndex = _.findIndex(this.dateArray, {
                year: this.currentYear,
                month: this.currentMonth,
                date: this.currentDate,
                isThisMonth: true
            });
            this.dateArray[todayIndex].isToday = true;
        }
        // Add the number of days next month to the array, with some months showing 6 weeks and some months showing 5 weeks
        if (this.dateArray.length % 7 !== 0) {
            var nextMonthAdd = 7 - this.dateArray.length % 7;
            for (var i = 0; i < nextMonthAdd; i++) {
                if (month === 11) {
                    this.dateArray.push({
                        year: year,
                        month: 0,
                        date: i + 1,
                        isThisMonth: false,
                        isToday: false,
                        isSelect: false,
                        hasEvent: (this.isInEvents(year, 0, i + 1)) ? true : false,
                    });
                }
                else {
                    this.dateArray.push({
                        year: year,
                        month: month + 1,
                        date: i + 1,
                        isThisMonth: false,
                        isToday: false,
                        isSelect: false,
                        hasEvent: (this.isInEvents(year, month + 1, i + 1)) ? true : false,
                    });
                }
            }
        }
        // All date data is now added to the dateArray array
        // Insert the date data into the new array every seven days
        for (var i = 0; i < this.dateArray.length / 7; i++) {
            for (var j = 0; j < 7; j++) {
                weekDays.push(this.dateArray[i * 7 + j]);
            }
            this.weekArray.push(weekDays);
            weekDays = [];
        }
    };
    Calendar.prototype.back = function () {
        // Decrementing the year if necessary
        if (this.displayMonth === 0) {
            this.displayYear--;
            this.displayMonth = 11;
        }
        else {
            this.displayMonth--;
        }
        this.onMonthSelect.emit({
            'year': this.displayYear,
            'month': this.displayMonth
        });
        this.createMonth(this.displayYear, this.displayMonth);
    };
    Calendar.prototype.forward = function () {
        // Incrementing the year if necessary
        if (this.displayMonth === 11) {
            this.displayYear++;
            this.displayMonth = 0;
        }
        else {
            this.displayMonth++;
        }
        this.onMonthSelect.emit({
            'year': this.displayYear,
            'month': this.displayMonth
        });
        this.createMonth(this.displayYear, this.displayMonth);
    };
    // Select a day, click event
    Calendar.prototype.daySelect = function (day, i, j) {
        // First clear the last click status
        this.dateArray[this.lastSelect].isSelect = false;
        // Store this clicked status
        this.lastSelect = i * 7 + j;
        this.dateArray[i * 7 + j].isSelect = true;
        this.onDaySelect.emit(day);
    };
    return Calendar;
}());
__decorate([
    Output(),
    __metadata("design:type", Object)
], Calendar.prototype, "onDaySelect", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Calendar.prototype, "onMonthSelect", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], Calendar.prototype, "events", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Calendar.prototype, "lang", void 0);
Calendar = __decorate([
    Component({
        selector: 'ion-calendar',
        template: "\n    <ion-grid>\n        <ion-row justify-content-center>\n            <ion-col col-auto (click)=\"back()\">\n                <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\n            </ion-col>\n            <ion-col col-auto>\n                <div>{{displayYear}} - {{displayMonth + 1 | monthName:lang}}</div>\n            </ion-col>\n            <ion-col col-auto (click)=\"forward()\">\n                <ion-icon ios=\"ios-arrow-forward\" md=\"md-arrow-forward\"></ion-icon>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col class=\"center calendar-header-col\" *ngFor=\"let head of weekHead\">{{head}}</ion-col>\n        </ion-row>\n\n        <ion-row class=\"calendar-row\" *ngFor=\"let week of weekArray;let i = index\">\n            <ion-col class=\"center calendar-col\" (click)=\"daySelect(day,i,j)\"\n            *ngFor=\"let day of week;let j = index\"\n            [ngClass]=\"[day.isThisMonth?'this-month':'not-this-month',day.isToday?'today':'',day.isSelect?'select':'']\">\n                {{day.date}}\n                <span class=\"eventBlip\" *ngIf=\"day.hasEvent\"></span>\n            </ion-col>\n        </ion-row>\n\n    </ion-grid>\n"
    }),
    __metadata("design:paramtypes", [])
], Calendar);
export { Calendar };
//# sourceMappingURL=calendar.js.map