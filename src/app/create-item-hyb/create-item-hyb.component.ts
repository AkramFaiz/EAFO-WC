import { Component, OnInit } from '@angular/core';
import { HybListComponent } from '../hyb-list/hyb-list.component';
import { HybdataService } from '../hybdata.service';

@Component({
  selector: 'app-create-item-hyb',
  templateUrl: './create-item-hyb.component.html',
  styleUrls: ['./create-item-hyb.component.css']
})
export class CreateItemHybComponent implements OnInit {
  imgUpload:string;
  title:string;version:string;desc:string;devBy:string;supBy:string;verHis:string;codeRepo:string;
  newItem= {};
  eFlag = false;
  constructor(private hyb_ele: HybListComponent,private hyb_api:HybdataService) { }

  ngOnInit() {
    if(this.hyb_ele.editFlag == true){   
      this.eFlag=true;   
      this.hyb_api.editItem_hyd(this.hyb_ele.editId).subscribe(res => {
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
    this.hyb_ele.flagVal = "hidePU";
    //setInterval (() => {
      this.hyb_ele.iVisi = false;
    //}, 1000);
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
        this.hyb_api.saveEditItem_hyd(this.hyb_ele.editId,this.newItem).subscribe(res => {   
          if(typeof(res) != 'object'){
            this.hyb_ele.iVisi = true;
            //this.iOS_ele.flagVal = "hideBack";
          }else{
            this.hyb_ele.flagVal = "hidePU";
            this.hyb_ele.iVisi = false;
            this.hyb_ele.getItems();
          } 
        });
      }else{
        this.hyb_api.addItem_hyb(this.newItem).subscribe(res => {   
          if(typeof(res) != 'object'){
            this.hyb_ele.iVisi = true;
          }else{
            this.hyb_ele.flagVal = "hidePU";
            this.hyb_ele.iVisi = false;
            this.hyb_ele.getItems();
          } 
        });
      } 
  }
}
