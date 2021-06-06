import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostItService } from './post-it.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NotificaComponent } from './notifica/notifica.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, NotificaComponent ],
  bootstrap:    [ AppComponent ],
  providers: [PostItService]
})
export class AppModule { }
