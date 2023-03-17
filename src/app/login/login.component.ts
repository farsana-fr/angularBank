// import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
// implements OnInit
export class LoginComponent implements OnInit {
  caption = 'Your Perfect Banking Partner';
  inputAccNo = 'Enter Account No';
  inputPWD = 'Enter your Password';
  lgnPwd = 'lgnPwd';

  accNo = '';
  pwd: any;
  
  constructor(private router: Router,private ds:DataService) {

  }

  ngOnInit(): void {}
  login() {
    var acNo = this.accNo;
    var passW = this.pwd;
    var uDetails = this.ds.userDetails;
    console.log(uDetails);
    console.log(acNo);
    console.log(passW);
    if (acNo in uDetails) {
      console.log(uDetails[acNo]['password']);
      if (passW == uDetails[acNo]['password']) {
        alert('Login Success');
        this.router.navigateByUrl('dashboard')
      } else {
        alert('Incorrect Password');
      }
    } else {
      alert('Account Number is Incorrect');
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
