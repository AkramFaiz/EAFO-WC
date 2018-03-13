import { Component, OnInit, Renderer, Input } from '@angular/core';
import { User } from '../user';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user:User; popVisi:boolean = false; //ht:number;
  constructor(private logService:LoginService,private router: Router,private renD:Renderer) { }
  private newUser: {};
  sMsg:string;
  //isVis:boolean;
  iVisi: boolean;
  compName: string="signIn";
  ngOnInit() {
    //this.ht = document.getElementsByTagName('html')[0].clientHeight;
    this.user = new User({ username:"",
      email:"", password: { pwd: "" , confirm_pwd: ""}, terms: false});
  }
  public onFormSubmit({ value, valid}: { value: User, valid: boolean }) {
    this.user = value;
    this.iVisi = true;
    console.log( this.user);
    console.log("valid: " + valid);
    if(valid == true){
      this.newUser = {
        user: this.user.username,
        password: this.user.password.pwd
      }
      console.log(this.newUser);
      this.logService.signUp(this.newUser).subscribe(res => {   
        this.popVisi = true;
        this.sMsg="Signing-Up Successful.";
        //this.isVis=false;
        });
    }
  }
  cancelBtn(e){
    //this.renD.invokeElementMethod(event.target, 'blur');
    let activeElement = <HTMLElement>document.activeElement;
    activeElement && activeElement.blur && activeElement.blur();
    // this.user = new User({ username:"",
    //   email:"", password: { pwd: "" , confirm_pwd: ""}, terms: false});
     this.router.navigateByUrl('/');
     this.iVisi = false;
  }
}
