import { Component, Input, OnInit } from '@angular/core';
import { postIT } from '../app.component';

@Component({
  selector: 'app-notifica',
  templateUrl: './notifica.component.html',
  styleUrls: ['./notifica.component.css']
})
export class NotificaComponent implements OnInit {
  @Input() dato: postIT;
  constructor() { }
  clean() {
    this.dato=undefined;
  }
  ngOnInit() {
  }

}