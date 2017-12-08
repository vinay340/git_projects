import { BrowserModule } from '@angular/platform-browser';
import { NgModule,} from '@angular/core';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import {FormsModule } from '@angular/forms';
import{ HttpModule } from '@angular/http';
import * as $ from 'jquery';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { EventComponent } from './event/event.component';
import { NewsComponent } from './news/news.component';
import { SigninComponent } from './signin/signin.component';
import { CalendarComponent } from './calendar/calendar.component';
import { JsonApiModule } from 'angular2-jsonapi';
import { EventRegComponent } from './event-reg/event-reg.component';
import { NotesComponent } from './notes/notes.component';


const eweek :Routes=[
  {path:"",component:MainComponent},
  {path:'app-first',component:FirstComponent},
  {path:'app-header',component:HeaderComponent},
  {path:'app-about',component:AboutComponent},
  {path:'app-event',component:EventComponent},
  {path:'app-news',component:NewsComponent},
  {path:'app-signin',component:SigninComponent},
  {path:'app-calendar',component:CalendarComponent},
  {path:'app-event-reg',component:EventRegComponent},
  {path:'app-notes',component:NotesComponent},
  
  
  
  
]
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    AboutComponent,
    HeaderComponent,
    MainComponent,
    EventComponent,
    NewsComponent,
    SigninComponent,
    CalendarComponent,
    EventRegComponent,
    NotesComponent,
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,RouterModule.forRoot(eweek),JsonApiModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
