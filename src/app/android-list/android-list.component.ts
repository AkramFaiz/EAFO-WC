import { Component, OnInit, trigger, transition, style, animate, keyframes} from '@angular/core';
import { AndDataService } from '../and-data.service';
import { bounceEffect } from '../animate';
@Component({
  selector: 'app-android-list',
  templateUrl: './android-list.component.html',
  styleUrls: ['./android-list.component.css'],
  animations:[bounceEffect]
})
export class AndroidListComponent implements OnInit {
  list: Array<any>;
  public flagVal;
  curId: string;
  iVisi : boolean = false;
  alertVisi: boolean = false;
  sMsg : string;
  editId = "";
  editFlag = false;
  constructor(private _andData :AndDataService) { }
  and_List : Array<any>;
  ngOnInit():void{
    this.getItems();
  }
  getItems() {
    this._andData.getList_and().subscribe(res => {
      this.and_List = res;
  });
}
showHide(){
  return this.flagVal;
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
  var list= this.and_List;
  if(userResp=="yes"){
    this._andData.removeItem_and(this.curId).subscribe(res => {
      if(res.n == 1){
        for(var i=0; i< list.length; i++){
          if(list[i]._id == this.curId)
          {list.splice(i,1)}
        }
      }
    });
 }else{return false;}
}


  /*and_List=[
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
    'Icon':'assets/iOS1.png',
    'Title':'Gordon',
    'Desc':'iOS Mobile Application',
    'Version':'1.0.0',
    'DevelopedBy':'Anjan V',
    'SupportedBy':'Pavan B',
    'VersionsHistory':'1.0.0, 1.0.1, 1.0.2, 2.0.0',
    'CodeRepository':'Open ALM'
  },
  {
    'Icon':'assets/iOS1.png',
    'Title':'Gordon',
    'Desc':'iOS Mobile Application',
    'Version':'2.0.0',
    'DevelopedBy':'Anjan V',
    'SupportedBy':'Pavan B',
    'VersionsHistory':'1.0.0, 1.0.1, 1.0.2, 2.0.0',
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
    'Icon':'assets/iOS1.png',
    'Title':'Gordon',
    'Desc':'iOS Mobile Application',
    'Version':'2.0.0',
    'DevelopedBy':'Anjan V',
    'SupportedBy':'Pavan B',
    'VersionsHistory':'1.0.0, 1.0.1, 1.0.2, 2.0.0',
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
    'Icon':'assets/iOS1.png',
    'Title':'Gordon',
    'Desc':'iOS Mobile Application',
    'Version':'2.0.0',
    'DevelopedBy':'Anjan V',
    'SupportedBy':'Pavan B',
    'VersionsHistory':'1.0.0, 1.0.1, 1.0.2, 2.0.0',
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
];
*/
}
