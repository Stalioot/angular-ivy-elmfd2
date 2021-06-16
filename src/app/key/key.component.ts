import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.css']
})
export class KeyComponent {
  @Output() newLoginEvent = new EventEmitter<string>();
  @Output() newRegisterEvent = new EventEmitter();

  login(k: string) {
    this.newLoginEvent.emit(k);
  }

  getKey() {
    this.newRegisterEvent.emit();
  }
}