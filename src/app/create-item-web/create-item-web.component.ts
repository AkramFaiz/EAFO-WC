import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { WebListComponent } from '../web-list/web-list.component';
import { WebDataService } from '../web-data.service';

@Component({
  selector: 'app-create-item-web',
  templateUrl: './create-item-web.component.html',
  styleUrls: ['./create-item-web.component.css']
})
export class CreateItemWebComponent implements OnInit {
    
  @Input() editFlagVal: boolean;
  @Input() editWebId: string;

  imgUpload:string;
  title:string;version:string;desc:string;devBy:string;supBy:string;verHis:string;codeRepo:string;
  newItem= {};
  flagVal:string;
  resp: string;
  eFlag = false;

  @Output() submitClked: EventEmitter<string>= new EventEmitter<string>();
  @Output() canClked: EventEmitter<string>= new EventEmitter<string>();

  constructor(private web_api:WebDataService) { }
  ngOnInit() {
    if(this.editFlagVal == true){   
    this.eFlag=true;   
    this.web_api.editItem_web(this.editWebId).subscribe(res => {
      // this.selectedItem = res;
      this.imgUpload = "assets/iOS1.png";
      this.title = res.Title;      
      this.desc = res.Desc;
      this.version = res.Version;
      this.devBy = res.DevelopedBy;
      this.supBy = res.SupportedBy;
      this.verHis = res.VersionsHistory;
      this.codeRepo= res.CodeRepository;   
    });
        
  }else{
    this.eFlag=false; 
    this.imgUpload="assets/iOS2.png";this.title="";this.version="";this.desc="";this.devBy="";this.supBy="";this.verHis="";this.codeRepo="";
  }
}
  closePU(){
    this.flagVal = "hide";
    console.log(this.flagVal);
    this.canClked.emit(this.flagVal);
    this.imgUpload="";this.title="";this.version="";this.desc="";this.devBy="";this.supBy="";this.verHis="";this.codeRepo="";
  }
  submitItem(){
    this.newItem=
        {
          Icon : this.imgUpload,
          Title: this.title,
          Desc: this.desc,
          Version: this.version,
          DevelopedBy: this.devBy,
          SupportedBy: this.supBy,
          VersionsHistory: this.verHis,
          CodeRepository: this.codeRepo
        }
        console.log(this.newItem);
      if(this.eFlag == true){
        this.web_api.saveEditItem_web(this.editWebId,this.newItem).subscribe(res => {   
          if(typeof(res) != 'object'){
            this.resp = 'false';
            this.submitClked.emit(this.resp);
            //console.log(this.resp);
          }else{                        
            this.resp = 'true';
            this.submitClked.emit(this.resp);
            //console.log(this.resp);
          } 
        });
      }else{
        this.web_api.addItem_web(this.newItem).subscribe(res => {   
          if(typeof(res) != 'object'){
            // this.web_ele.iVisi = true;
            this.resp = 'false';
            this.submitClked.emit(this.resp);
          }else{
            this.resp = 'true';
            //this.resp=JSON.stringify(this.newItem)+'|'+'true';
            this.submitClked.emit(this.resp);
            //console.log(this.resp);
            // this.web_ele.flagVal = "hidePU";
            // this.web_ele.iVisi = false;
            // this.web_ele.getItems();
          } 
        });
      } 
  }
}
