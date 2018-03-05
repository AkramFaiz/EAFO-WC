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
  iVisi = false;
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
  delItem(id: any){
    var list= this.web_List;
    console.log(list+',sdsd,'+id);
    if(!confirm('Do you want to delete?'))
    {return false;}else{
    this._webData.removeItem_web(id).subscribe(res => {
      if(res.n == 1){
        for(var i=0; i< list.length; i++){
          if(list[i]._id == id)
          {list.splice(i,1)}
        }
      }
    });
   }
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

