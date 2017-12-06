import { Injectable } from '@angular/core';
import { JsonApiDatastoreConfig, JsonApiDatastore, DatastoreConfig } from 'angular2-jsonapi';
 import {Http} from '@angular/http';

@Injectable()

export class DatastoreService extends JsonApiDatastore {

  constructor(http: Http) {
    super(http);
}

}
