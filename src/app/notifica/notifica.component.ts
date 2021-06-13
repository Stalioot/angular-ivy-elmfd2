import { Component, Input} from '@angular/core';
import { postIT } from '../app.component';

@Component({
  selector: 'app-notifica',
  templateUrl: './notifica.component.html',
  styleUrls: ['./notifica.component.css']
})
export class NotificaComponent {
  @Input() dato: postIT;
  
  clean() {
    this.dato=undefined;
  }

}