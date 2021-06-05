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
  arrayPostIT: Array<postIT> = [];
  constructor(private service: PostItService) { }

 newPostIT(titlePost: string, text: string){
    let nuovoPost: postIT;
    nuovoPost.titolo = titlePost;
    nuovoPost.testo = text;
    console.log(nuovoPost);
    this.addPost(nuovoPost);
  }

  addPost(newPost: postIT) {
    this.arrayPostIT.push(newPost);
    let msg: string = JSON.stringify(this.arrayPostIT);
    this.service.postData(msg)
    .then(response => response.json(), error => alert(error))
    .then(data => console.log(data));
  }

  showPost(){

  }
    
  clean() {
    this.selezione=undefined;
  }
}
