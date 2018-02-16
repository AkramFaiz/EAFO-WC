import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  private user:User;iVisi = false;
  constructor(private logService:LoginService,private router: Router) { }
  private newUser: {};
  ngOnInit() {
    this.user = new User({ username:"",
      email:"", password: { pwd: "" , confirm_pwd: ""}, terms: false});
  }
  public onFormSubmit({ value, valid}: { value: User, valid: boolean }) {
    this.user = value;
    console.log( this.user);
    console.log("valid: " + valid);
    if(valid == true){
      this.newUser = {
        user: this.user.username,
        password: this.user.password.pwd
      }
      console.log(this.newUser);
      this.logService.signUp(this.newUser).subscribe(res => {   
        this.iVisi = true;
      });
    }
  }
  cancelBtn(){
    this.router.navigateByUrl('/');
  }
  
}
