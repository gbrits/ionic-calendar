import {Pipe} from '@angular/core';

@Pipe({
  name: 'monthName'
})
export class monthName {
  private lang: string; // (es or en)
  transform(value, args) {
    if (args === 'es') { 
      this.lang = 'es'; 
    } else if (args === 'pt') {
      this.lang = 'pt';
    }
    let monthNames = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
    if (this.lang === 'es') {
      monthNames = [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ];
    } else if (this.lang === 'pt') {
      monthNames = [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ];
    }
    return monthNames[value - 1];
  }
}
