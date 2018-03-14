import { Component, OnInit } from '@angular/core';
import { WebListComponent } from '../web-list/web-list.component';
import { WebDataService } from '../web-data.service';

@Component({
  selector: 'app-create-item-web',
  templateUrl: './create-item-web.component.html',
  styleUrls: ['./create-item-web.component.css']
})
export class CreateItemWebComponent implements OnInit {
  imgUpload:string;
  title:string;version:string;desc:string;devBy:string;supBy:string;verHis:string;codeRepo:string;
  newItem= {};
  eFlag = false;
  constructor(private web_ele:WebListComponent,private web_api:WebDataService) { }
  ngOnInit() {
    if(this.web_ele.editFlag == true){   
    this.eFlag=true;   
    this.web_api.editItem_web(this.web_ele.editId).subscribe(res => {
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
    this.web_ele.flagVal = "hidePU";
    this.web_ele.iVisi = false;
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
        this.web_api.saveEditItem_web(this.web_ele.editId,this.newItem).subscribe(res => {   
          if(typeof(res) != 'object'){
            this.web_ele.iVisi = true;
            // this.web_ele.bgVisi = true;
            //this.iOS_ele.flagVal = "hideBack";
          }else{
            this.web_ele.flagVal = "hidePU";
            this.web_ele.iVisi = false;
            // this.web_ele.bgVisi = false;
            this.web_ele.getItems();
          } 
        });
      }else{
        this.web_api.addItem_web(this.newItem).subscribe(res => {   
          if(typeof(res) != 'object'){
            this.web_ele.iVisi = true;
          }else{
            this.web_ele.flagVal = "hidePU";
            this.web_ele.iVisi = false;
            this.web_ele.getItems();
          } 
        });
      } 
  }
}
