"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var ionic_angular_1 = require("ionic-angular");
var calendar_1 = require("./calendar");
var month_name_1 = require("./pipes/month-name");
var weekday_name_1 = require("./pipes/weekday-name");
var CalendarModule = /** @class */ (function () {
    function CalendarModule() {
    }
    CalendarModule = __decorate([
        core_1.NgModule({
            declarations: [
                calendar_1.Calendar,
                month_name_1.monthName,
                weekday_name_1.weekdayName
            ],
            imports: [
                ionic_angular_1.IonicModule,
            ],
            exports: [
                calendar_1.Calendar,
                month_name_1.monthName,
                weekday_name_1.weekdayName
            ]
        })
    ], CalendarModule);
    return CalendarModule;
}());
exports.CalendarModule = CalendarModule;
