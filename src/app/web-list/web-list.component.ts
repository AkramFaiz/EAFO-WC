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

  ngOnInit():void{
    this._webData.getList_web().subscribe(res => {
      this.web_List = res;
    });
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

