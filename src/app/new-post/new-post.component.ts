import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  @Output() newPostEvent = new EventEmitter<object>();
  
  newPost(newTitle: string, newText: string) {
    this.newPostEvent.emit({ newTitle, newText });
  }
  ngOnInit() {
  }

}