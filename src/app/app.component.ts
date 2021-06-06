import { error } from '@angular/compiler/src/util';
import { Component, VERSION } from '@angular/core';
import { PostItService } from './post-it.service';

export class postIT {
  titolo: string;
  testo: string;
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
    let nuovoPost: postIT = new postIT();
    nuovoPost.titolo = titlePost;
    nuovoPost.testo = text;
    console.log(nuovoPost);
    this.addPost(nuovoPost);
  }

  addPost(newPost: postIT) {
    this.arrayPostIT.push(newPost);
    let msg: string = JSON.stringify(this.arrayPostIT);
    console.log(this.arrayPostIT.length);
    this.service.postData(msg)
    .then(response => response.json(), error => alert(error))
    .then(data => console.log(data));
  }

  caricaPost(oggetto){
    this.selezione.titolo = oggetto.titolo;
    this.selezione.testo = oggetto.testo;
  }

  showPost(){
    this.service.getData()
    .then(response => response.json(), error => alert(error))
    .then(data => {
      console.log(data, "sono qui");
      let obj = JSON.parse(data);
      for (let i in obj) {
      console.log(obj[i].titolo);
      console.log(obj[i].testo);
      }
    });
  }
    
  
}
