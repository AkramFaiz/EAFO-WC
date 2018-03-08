import { Injectable } from '@angular/core';
import {Http,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { IfObservable } from 'rxjs/observable/IfObservable';

@Injectable()
export class HybdataService {
  result : any;
  constructor(private _http: Http) { }

  getList_hyb(){
      return this._http.get("/hyb").map(result => this.result = result.json());
  }
  addItem_hyb(item){
    return this._http.post("/hyb",item).map(result => this.result = result.json());
 }
  removeItem_hyb(id){
      return this._http.delete('/hyb/'+ id).map(result => this.result = result.json());
  }
  editItem_hyd(id){
    return this._http.get('/hyb/'+ id).map(result => this.result = result.json());
  }
  saveEditItem_hyd(id,item){
    return this._http.put('/hyb/'+ id,item).map(result => this.result = result.json());
  }
}
