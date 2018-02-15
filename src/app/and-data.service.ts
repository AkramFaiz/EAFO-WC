import { Injectable } from '@angular/core';
import {Http,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AndDataService {
  result : any;
  constructor(private _http: Http) { }

  getList_and(){
    return this._http.get("/and").map(result => this.result = result.json());
   }

  removeItem_and(id){
       return this._http.delete('/and/'+ id).map(result => this.result = result.json());
  }
  addItem_and(item){
     return this._http.post("/and",item).map(result => this.result = result.json());
  }
}
