import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-hyb-list',
  templateUrl: './hyb-list.component.html',
  styleUrls: ['./hyb-list.component.css']
})
export class HybListComponent{

  constructor(private _login :LoginService) { }

  hyd_List=[{
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
  }
];

}
