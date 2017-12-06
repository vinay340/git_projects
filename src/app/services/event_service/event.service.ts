import { Injectable } from '@angular/core';
import { Http , Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Items} from '../event_service/event_item';
import { event_arr } from './event_class';
import { forEach } from '@angular/router/src/utils/collection';
import { Subscriber } from 'rxjs/Subscriber';
@Injectable()
export class EventService {
data;
i:any;
  constructor( ) 
  { 
  }
  
somemethod(){
 for( this.i=1;this.i<3;this.i++){
  this.data= Items.event_items.push(this.i);
  return this.data;
 }


 
}
}
