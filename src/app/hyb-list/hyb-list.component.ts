import { Component, OnInit} from '@angular/core';
import { HybdataService} from '../hybdata.service';
import { bounceEffect } from '../animate';

@Component({
  selector: 'app-hyb-list',
  templateUrl: './hyb-list.component.html',
  styleUrls: ['./hyb-list.component.css'],
  animations:[ bounceEffect]
})
export class HybListComponent implements OnInit {
  list: Array<any>;
  public flagVal;
  curId: string;
  iVisi : boolean = false;
  alertVisi: boolean = false;
  sMsg : string;
  editId = "";
  editFlag = false;
  constructor(private _hybData :HybdataService) { }
  hyb_List: Array<any>;

  ngOnInit():void{
    this.getItems();
  }
  showHide(){
    return this.flagVal;
  }
  getItems(){
    this._hybData.getList_hyb().subscribe(res => {
      this.hyb_List = res;
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
    var list= this.hyb_List;
    if(userResp=="yes"){
      this._hybData.removeItem_hyb(this.curId).subscribe(res => {
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
