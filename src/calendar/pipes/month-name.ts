import {Pipe} from '@angular/core';

@Pipe({
  name: 'monthName'
})
export class monthName {
  transform(value, args) {
    var monthNames = [ 'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December' ];
    return monthNames[value - 1];
  }
}
