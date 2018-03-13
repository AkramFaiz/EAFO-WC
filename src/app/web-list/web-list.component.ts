import { Component, OnInit } from '@angular/core';
import { WebDataService } from '../web-data.service';

@Component({
  selector: 'app-web-list',
  templateUrl: './web-list.component.html',
  styleUrls: ['./web-list.component.css']
})
export class WebListComponent implements OnInit {

  list: Array<any>;
  constructor(private _webData :WebDataService) { }
  web_List: Array<any>;
  public flagVal;
  iVisi : boolean = false;
  bgVisi : boolean = false;
  popVisi : boolean = false;
  sMsg : string;
  isVis : boolean;
  editId = "";
  editFlag = false;
  userRespValue:string;
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
    this.bgVisi = true;
    this.editFlag = false;
    this.flagVal = "showPU";    
  }
  editItem(id: any){
    this.editFlag = true;
    this.bgVisi = true;
    this.iVisi = true;
    this.editId = id;    //this.getItems();
    this.flagVal = "showPU"; 
  }
  userAction(userResp:string):void{
    this.userRespValue = userResp;
  }
  delItem(id: any){
    var list= this.web_List;
    this.popVisi = true;
    this.bgVisi = true;
    this.sMsg = 'Do you want to delete?';
    this.isVis = true;
    
    if(this.userRespValue=="yes"){
    this._webData.removeItem_web(id).subscribe(res => {
      if(res.n == 1){
        for(var i=0; i< list.length; i++){
          if(list[i]._id == id)
          {list.splice(i,1)}
        }
      }
    });
   }else{return false;}
  }

/*
  web_List=[
  {
    'Icon':'assets/iOS2.png',
    'Title':'Info Security',
    'Desc':'iOS Mobile Application, Mobile Application, Mobile Application, Mobile Application, Mobile Application, Mobile Application, Mobile Application',
    'Version':'1.0.2',
    'DevelopedBy':'Pavan B',
    'SupportedBy':'Pavan B',
    'VersionsHistory':'1.0.0, 1.0.1, 1.0.2',
    'CodeRepository':'Open ALM'
  },
  {
    'Icon':'assets/iOS2.png',
    'Title':'Info Security',
    'Desc':'iOS Mobile Application, Mobile Application, Mobile Application, Mobile Application, Mobile Application, Mobile Application, Mobile Application',
    'Version':'1.0.2',
    'DevelopedBy':'Pavan B',
    'SupportedBy':'Pavan B',
    'VersionsHistory':'1.0.0, 1.0.1, 1.0.2',
    'CodeRepository':'Open ALM'
  },
  {
    'Icon':'assets/iOS2.png',
    'Title':'Info Security',
    'Desc':'iOS Mobile Application, Mobile Application, Mobile Application, Mobile Application, Mobile Application, Mobile Application, Mobile Application',
    'Version':'1.0.2',
    'DevelopedBy':'Pavan B',
    'SupportedBy':'Pavan B',
    'VersionsHistory':'1.0.0, 1.0.1, 1.0.2',
    'CodeRepository':'Open ALM'
  }
];*/

}

