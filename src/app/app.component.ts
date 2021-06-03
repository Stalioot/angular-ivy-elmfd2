import { Component, VERSION } from '@angular/core';

class postIT {
  titolo: string;
  testo: string;
  constructor(titolo: string, testo: string) {
    this.titolo=titolo;
    this.testo=testo;
  }
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title: string = 'Progetto POST-IT in Angular ' + VERSION.major;
  selezione: postIT;
  arrayPostIT: Array<postIT> = [
    new postIT('Lavatrice','ritirare i panni alle 15'),
    new postIT('Meccanico','ritirare la macchina alle 17'),
    new postIT('Abbonamento','rinnovare abbonamento sky')
  ];
  seleziona(itemName: string){
    var trovato: Array<postIT> = this.arrayPostIT.filter(
      el => ( el.titolo === itemName)
    );
    this.selezione = trovato[0];
  }
  clean() {
    this.selezione=undefined;
  }
}
