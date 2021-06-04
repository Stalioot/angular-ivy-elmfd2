import { Component, VERSION } from '@angular/core';
import { PostItService } from './post-it.service';

export class postIT {
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
    new postIT('Lavatrice','ritirare i panni alle 15')
  ];
  constructor(private service: PostItService) { }

  seleziona(itemName: string) {
    let msg = JSON.stringify(this.arrayPostIT);
    this.service.postData(msg)
    .then(response => response.json(), error => alert(error));
  }
  clean() {
    this.selezione=undefined;
  }
}
