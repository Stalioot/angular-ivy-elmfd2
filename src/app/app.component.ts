import { error } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { PostItService } from './post-it.service';

export class postIT {
  titolo: string;
  testo: string;
  important: boolean;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title: string = 'Salva i tuoi POST-IT ';
  selezione: postIT;
  arrayPostIT: Array<postIT> = [];
  arrayPostImp: Array<postIT> = [];
  logged: boolean = false;
  user: string = '';
  impFlag: boolean = false;
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

  showPost(k){
    this.user = k;
    this.service.apiKEY = k;
    console.log(k);
    this.service.getData()
    .then(response => response.json(), error => alert(error))
    .then(data => {
      console.log(data, "sono qui");
      let arraypost = JSON.parse(data);
      for (let post in arraypost) {
        this.arrayPostIT.push(arraypost[post]);
      }
      this.logged = true;
    });
  }

  deletePost(selected) {
    this.arrayPostIT = this.arrayPostIT.filter(data => data !=selected);
    this.selezione.titolo = undefined;
    this.selezione.testo = undefined;
    let msg: string = JSON.stringify(this.arrayPostIT);
    this.service.postData(msg)
    .then(response => response.json(), error => alert(error)); 
  }
  
   mostra(selected) {
      this.selezione = new postIT();
      this.selezione.titolo = selected.titolo;
      this.selezione.testo = selected.testo;
      console.log(this.selezione);
   }

   mostraImp(){
     this.arrayPostImp = this.arrayPostIT.filter(data => data.important == true);
     this.impFlag = true;
   }
   
   mostraAll(){
     this.impFlag = false;
   }

   getKey(){
    this.service.newKey()
    .then(response => response.json(), error => alert(error))
    .then(k => {
      this.user = k;
      this.service.apiKEY = this.user;
      console.log(this.user);
      this.logged = true;
    });
   }
  
}
