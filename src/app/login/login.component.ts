// import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

  constructor(
    private router: Router,
    private ds: DataService,
    private fb: FormBuilder
  ) {}

  loginForm = this.fb.group({
    accNo: ['', [Validators.required]],
    pwd: ['', [Validators.required]],
  });
  ngOnInit(): void {}
  login() {
    var acNo = this.loginForm.value.accNo;
    var passW = this.loginForm.value.pwd;
    var uDetails = this.ds.userDetails;
    console.log(uDetails);
    console.log(acNo);
    console.log(passW);
    console.log(this.loginForm);
    console.log(this.loginForm.valid);
    if (this.loginForm.valid) {
      console.log("LINE 40");
      this.ds.login(acNo, passW).subscribe((result:any)=>{

        console.log(result);
         localStorage.setItem("currentUser",result.currentUser);
         localStorage.setItem("currentAccNo",JSON.stringify(result.currentAccNo));
         localStorage.setItem("token",JSON.stringify(result.token));
        this.router.navigateByUrl('dashboard')

      },
      result=>{
        alert(result.error.message)
      }
      )
    } else {
      alert('Inavlid Form');
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
