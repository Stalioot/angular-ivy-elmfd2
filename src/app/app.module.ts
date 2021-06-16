import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostItService } from './post-it.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NotificaComponent } from './notifica/notifica.component';
import { NewPostComponent } from './new-post/new-post.component';
import { KeyComponent } from './key/key.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, NotificaComponent, NewPostComponent, KeyComponent ],
  bootstrap:    [ AppComponent ],
  providers: [PostItService]
})
export class AppModule { }
