import { Component, OnInit } from '@angular/core';
import { IOsdataService } from '../i-osdata.service';

@Component({
  selector: 'app-ios-list',
  templateUrl: './ios-list.component.html',
  styleUrls: ['./ios-list.component.css']
})
export class IosListComponent implements OnInit{
  list : Array<any>;
  iVisi = false;
  constructor(private _iosData: IOsdataService) { }
  iOS_List : Array<any>;
  ngOnInit():void{
    this._iosData.getList_iOS().subscribe(res => {
      this.iOS_List = res;
    });
  }
  addItem(){
    this.iVisi = true;
  }
  // delItem(id: any){
  //   var list= this.iOS_List;
  //   console.log(list+',sdsd,'+id);
  //   this._iosData.removeItem_iOS(id).subscribe(res => {
  //     if(res.n == 1){
  //       for(var i=0; i< list.length; i++){
  //         if(list[i]._id == id){list.splice(i,1)}
  //       }
  //     }
  //   });
  // }




  /*iOS_List=[{
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
