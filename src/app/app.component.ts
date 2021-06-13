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
  selezione: postIT = new postIT();
  arrayPostIT: Array<postIT> = [];
  constructor(private service: PostItService) { }

  addPost(newPost: postIT) {
    this.arrayPostIT.push(newPost);
     console.log(this.arrayPostIT);
    let msg: string = JSON.stringify(this.arrayPostIT);
    console.log(this.arrayPostIT.length);
    this.service.postData(msg)
    .then(response => response.json(), error => alert(error))
    .then(data => console.log(data));
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
  
   mostra(selected) {
      this.selezione.titolo = selected.titolo;
      this.selezione.testo = selected.testo;
      console.log(this.selezione);
   }
  
}
