"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var moment = require("moment");
var weekdayName = /** @class */ (function () {
    function weekdayName() {
    }
    weekdayName.prototype.transform = function (value, args) {
        var lang = moment().locale(args);
        return lang.localeData().weekdaysShort()[value];
    };
    weekdayName = __decorate([
        core_1.Pipe({
            name: 'weekdayName'
        })
    ], weekdayName);
    return weekdayName;
}());
exports.weekdayName = weekdayName;
//# sourceMappingURL=weekday-name.js.map