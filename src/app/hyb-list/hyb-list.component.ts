import { Component, OnInit } from '@angular/core';
import { HybdataService} from '../hybdata.service';

@Component({
  selector: 'app-hyb-list',
  templateUrl: './hyb-list.component.html',
  styleUrls: ['./hyb-list.component.css']
})
export class HybListComponent implements OnInit {
  list: Array<any>;
  iVisi = false;
  constructor(private _hybData :HybdataService) { }
  hyb_List: Array<any>;

  ngOnInit():void{
    this._hybData.getList_hyb().subscribe(res => {
      this.hyb_List = res;
    });
  }
  addItem(){
    this.iVisi = true;
  }
  delItem(id: any){
    var list= this.hyb_List;
    console.log(list+',sdsd,'+id);
    this._hybData.removeItem_hyb(id).subscribe(res => {
      if(res.n == 1){
        for(var i=0; i< list.length; i++){
          if(list[i]._id == id)
          {list.splice(i,1)}
        }
      }
    });
  }

/*
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
];*/

}
