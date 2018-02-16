import { Component, OnInit } from '@angular/core';
import { User } from '../user';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  private user:User;
  constructor() { }

  ngOnInit() {
    this.user = new User({ username:"",
      email:"", password: { pwd: "" , confirm_pwd: ""}, terms: false});
  }

}
