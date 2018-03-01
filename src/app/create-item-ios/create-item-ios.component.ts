import { Component, OnInit } from '@angular/core';
import { IosListComponent } from '../ios-list/ios-list.component';
import { IOsdataService } from '../i-osdata.service';
import { FileSelectDirective, FileUploader } from 'ng2-file-upload';
import { Item } from '../listItem';

const _url="htpt://localhost:3000/file/iOS";
@Component({
  selector: 'app-create-item-ios',
  templateUrl: './create-item-ios.component.html',
  styleUrls: ['./create-item-ios.component.css']
})
export class CreateItemIosComponent implements OnInit {

  imgUpload:string;
  title:string;version:string;desc:string;devBy:string;supBy:string;verHis:string;codeRepo:string;
  newItem= {};

  eFlag = false;
  //newWebItem = {};
  constructor(private iOS_ele:IosListComponent,private ios_api:IOsdataService) {

  //  this.fileUploader.onCompleteItem = (item:any,response:any, status:any, headers:any)=>{
  //    this.attList.push(JSON.parse(response));
  //  }
   }
  // fileUploader:FileUploader  = new FileUploader({url:_url});
  // attList:any = [];

  ngOnInit() {
    if(this.iOS_ele.editFlag == true){   
      this.eFlag=true;   
      this.ios_api.editItem_iOS(this.iOS_ele.editId).subscribe(res => {
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
    this.iOS_ele.flagVal = "hidePU";
    //setInterval (() => {
      this.iOS_ele.iVisi = false;
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
        this.ios_api.saveEditItem_iOS(this.iOS_ele.editId,this.newItem).subscribe(res => {   
          if(typeof(res) != 'object'){
            this.iOS_ele.iVisi = true;
            //this.iOS_ele.flagVal = "hideBack";
          }else{
            this.iOS_ele.flagVal = "hidePU";
            this.iOS_ele.iVisi = false;
            this.iOS_ele.getItems();
          } 
        });
      }else{
        this.ios_api.addItem_ios(this.newItem).subscribe(res => {   
          if(typeof(res) != 'object'){
            this.iOS_ele.iVisi = true;
          }else{
            this.iOS_ele.flagVal = "hidePU";
            this.iOS_ele.iVisi = false;
            this.iOS_ele.getItems();
          } 
        });
      } 
    }
  
}
