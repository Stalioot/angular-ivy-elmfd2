import { Component, EventEmitter, Output } from '@angular/core';
import { postIT } from '../app.component';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {
  @Output() newPostEvent = new EventEmitter<postIT>();
  
  newPost(titolo: string, testo: string, important: boolean) {
    if (titolo != ""){
      this.newPostEvent.emit({ titolo, testo, important });
    }
  }

}