import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //  userName; pwd;user;
  visible = false;
  clearUser = false;
  clearPwd = false;
  username = "";
  password = "";
  name="";
  user : Array<any>;
  constructor(private _router:Router, private _loginService: LoginService,private _actRoute:ActivatedRoute) { }

  ngOnInit(){
    console.log(this._actRoute+","+this._router);
   // $('.loginUI').addClass('move-up');
    this._loginService.getUser().subscribe(res => this.user = res);
  }
  keyUserClkd(){
    this.visible = false;
    if(this.username == ""){
      this.clearUser = false;
    }else{
      this.clearUser = true;
    }
  }
  keyPwdClkd(e){
    if(e.keyCode == 13){
      this.visible = true;
    }else{
      this.visible = false;
    }    
    if(this.password == ""){
      this.clearPwd = false;
    }else{
      this.clearPwd = true;
    }
  }
   loginClk(ev){
     ev.preventDefault();
    console.log(this.username+","+this.password);
    console.log(this.user);
    if(this.user != undefined){
      for( var t=0;t<this.user.length;t++){
        if(this.username == this.user[t].user && this.password == this.user[t].password){
          this._loginService.setUserLoggedIn(this.username);
          this._router.navigate(['home']);
        }
        else{
          this.visible = true;
        }
        }
      }
      else{
        // need to check the logic
        this.visible = true;
      }
    }
    
    SignUpClk(){
      this._router.navigate(['sign']);
    }
    clearInput(inputType){
      if(inputType == 'user'){
        this.username="";
        this.clearUser = false;
      }else if(inputType == 'pswd'){
        this.password="";
        this.clearPwd = false;
      }
    }

  
}
