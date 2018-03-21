import { Component, OnInit} from '@angular/core';
import { bounceEffect } from '../animate';
import { IOsdataService } from '../i-osdata.service';
import { Item } from '../listItem';

@Component({
  selector: 'app-ios-list',
  templateUrl: './ios-list.component.html',
  styleUrls: ['./ios-list.component.css'],
  animations:[ bounceEffect]
})
export class IosListComponent implements OnInit{

  list : Array<any>;
  public flagVal;
  curId: string;
  iVisi : boolean = false;
  alertVisi: boolean = false;
  sMsg : string;
  editId = "";
  editFlag = false;
  constructor(private _iosData: IOsdataService) { }
  iOS_List : Array<any>;
  ngOnInit():void{
    this.getItems();
  }
  showHide(){
    return this.flagVal;
  }
  getItems(){
    this._iosData.getList_iOS().subscribe(res => {
      this.iOS_List = res;
    });
  }
  addItem(){
    this.iVisi = true;
    this.editFlag = false;
    this.flagVal = "showPU";    
  }
  editItem(id: any){
    this.editFlag = true;
    this.iVisi = true;
    this.editId = id;    //this.getItems();
    this.flagVal = "showPU"; 
  }
  userAction(userResp:string):void{
    this.delSelItem(userResp);
  }
  delItem(id: any){
    this.curId= id;
    this.alertVisi = true;
    this.sMsg = 'Do you want to delete?';
  }
  delSelItem(userResp){  
    this.alertVisi = false;
    var list= this.iOS_List;
    if(userResp=="yes"){
      this._iosData.removeItem_iOS(this.curId).subscribe(res => {
        if(res.n == 1){
          for(var i=0; i< list.length; i++){
            if(list[i]._id == this.curId)
            {list.splice(i,1)}
          }
        }
      });
   }else{return false;}
  }
}
