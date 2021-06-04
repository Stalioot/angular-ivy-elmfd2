import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostItService {
  apiKEY: string = '';
  apiURL: string = 'https://eu-central-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/kvaas-giwjg/service/kvaas/incoming_webhook';
  constructor(private http: HttpClient) { }

  public getKey() {
   let promise = fetch(this.apiURL + '/new', {method: 'POST'})
    .then(response => response.json(), error => alert(error));
    console.log(promise);
    return promise;
  }
}