import { Component } from '@angular/core';
// import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
// implements OnInit
export class LoginComponent {
  caption = 'Your Perfect Banking Partner';
  inputAccNo = 'Enter Account No';
  inputPWD = 'Enter your Password';
  lgnPwd="lgnPwd"

  accNo = '';
  pwd: any;

  userDetails: any = {
    1001: { acno: 1001, username: 'amal', password: 'abc123', balance: 0 },
    1002: { acno: 1002, username: 'raj', password: 'abc123', balance: 0 },
    1003: { acno: 1003, username: 'deepak', password: 'abc123', balance: 0 },
    1004: { acno: 1004, username: 'anu', password: 'abc123', balance: 0 },
  };
  constructor() {}

  // ngOnInit(): void {

  // }
  login() {

    var acNo=this.accNo;
    var passW=this.pwd
    var uDetails=this.userDetails
    console.log(uDetails);
    console.log(acNo);
    console.log(passW);
    if(acNo in uDetails)
    {
      console.log(uDetails[acNo]["password"]);
      if(passW==uDetails[acNo]["password"])
      {
        alert("Login Success");
      }
      else
      {
        alert("Incorrect Password");
      }
    }
    else{
      alert("Account Number is Incorrect")
    }
  }
  // accEnter(event: any) {
  //   this.accNo = event.target.value;
  // }
  // pwdEnter(event: any) {
  //   this.pwd = event.target.value;
  // }

  // login(a:any,b:any) {

  //   var acNo=a.value;
  //   var passW=b.value;
  //   var uDetails=this.userDetails
  //   console.log(uDetails["1001"];
  //   console.log(acNo);
  //   console.log(passW);
  //   if(acNo in uDetails)
  //   {
  //     console.log(uDetails[acNo]["password"]);
  //     if(passW==uDetails[acNo]["password"])
  //     {
  //       alert("Login Success");
  //     }
  //     else
  //     {
  //       alert("Incorrect Password");
  //     }
  //   }
  //   else{
  //     alert("Account Number is Incorrect")
  //   }
  // }
}