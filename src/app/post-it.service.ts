import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostItService {
  apiKEY: string = '3dfcae7e';
  apiURL: string = 'https://eu-central-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/kvaas-giwjg/service/kvaas/incoming_webhook';
  constructor(private service: HttpClient) { }

  public getData() {
   return fetch(this.apiURL + '/get?key=' + this.apiKEY)
    .then(response => response.json(), error => alert(error));
  }
  public postData(testo: string) {
   return fetch(this.apiURL + '/post?key=' + this.apiKEY + '&msg=' +testo, { method: 'POST'})
    .then(response => response.json(), error => alert(error));
  }
  public newKey() {
   return fetch(this.apiURL + '/new', { method: 'POST' })
    .then(response => response.json(), error => alert(error));
  }
}