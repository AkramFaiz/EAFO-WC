import { Component, OnInit } from '@angular/core';
import { AndroidListComponent } from '../android-list/android-list.component';
import { AndDataService } from '../and-data.service';

@Component({
  selector: 'app-create-item-and',
  templateUrl: './create-item-and.component.html',
  styleUrls: ['./create-item-and.component.css']
})
export class CreateItemAndComponent implements OnInit {
  imgUpload:string;
  title:string;version:string;desc:string;devBy:string;supBy:string;verHis:string;codeRepo:string;
  newItem= {};
  eFlag = false;
  constructor(private and_ele:AndroidListComponent,private and_api:AndDataService) { }

  ngOnInit() {
    if(this.and_ele.editFlag == true){   
      this.eFlag=true;   
      this.and_api.editItem_and(this.and_ele.editId).subscribe(res => {
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
    this.and_ele.flagVal = "hidePU";
    //setInterval (() => {
      this.and_ele.iVisi = false;
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
        this.and_api.saveEditItem_and(this.and_ele.editId,this.newItem).subscribe(res => {   
          if(typeof(res) != 'object'){
            this.and_ele.iVisi = true;
            //this.iOS_ele.flagVal = "hideBack";
          }else{
            this.and_ele.flagVal = "hidePU";
            this.and_ele.iVisi = false;
            this.and_ele.getItems();
          } 
        });
      }else{
        this.and_api.addItem_and(this.newItem).subscribe(res => {   
          if(typeof(res) != 'object'){
            this.and_ele.iVisi = true;
          }else{
            this.and_ele.flagVal = "hidePU";
            this.and_ele.iVisi = false;
            this.and_ele.getItems();
          } 
        });
      } 
  }
}
