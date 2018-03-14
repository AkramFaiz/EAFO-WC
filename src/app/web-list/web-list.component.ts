import { Component, OnInit, trigger, transition, style, animate, keyframes} from '@angular/core';
import { WebDataService } from '../web-data.service';
import { bounceEffect } from '../animate';
@Component({
  selector: 'app-web-list',
  templateUrl: './web-list.component.html',
  styleUrls: ['./web-list.component.css'],
  animations:[bounceEffect]
})
export class WebListComponent implements OnInit {

  list: Array<any>;
  constructor(private _webData :WebDataService) { }
  web_List: Array<any>;
  public flagVal;
  curId: string;
  iVisi : boolean = false;
  alertVisi: boolean = false;
  sMsg : string;
  editId = "";
  editFlag = false;
  ngOnInit():void{
    this.getItems();
  }
  showHide(){
    return this.flagVal;
  }
  getItems(){
    this._webData.getList_web().subscribe(res => {
      this.web_List = res;
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
    var list= this.web_List;
    if(userResp=="yes"){
    this._webData.removeItem_web(this.curId).subscribe(res => {
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

