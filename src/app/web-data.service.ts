import { Injectable } from '@angular/core';
import {Http,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WebDataService {
  result : any;
  constructor(private _http: Http) { }

  getList_web(){
      return this._http.get("/web").map(result => this.result = result.json());
  }

  removeItem_web(id){
      return this._http.delete('/web/'+ id).map(result => this.result = result.json());
  }
}
