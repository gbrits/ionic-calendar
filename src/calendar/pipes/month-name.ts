import {Pipe} from '@angular/core';

@Pipe({
  name: 'monthName'
})
export class monthName {
  private lang: string = 'es'; // (es or en)
  transform(value, args) {
    console.info(args);
    let monthNames = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
    if (this.lang === 'es') {
      monthNames = [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ];
    }
    return monthNames[value - 1];
  }
}
