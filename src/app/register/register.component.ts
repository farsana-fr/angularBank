import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  uName = '';
  accNo = '';
  pwd: any;

  //Dependency Injection
  constructor(private router: Router, private ds: DataService) {}

  ngOnInit(): void {}

  register() {
    var uName = this.uName;
    var accNo = this.accNo;
    var pwd = this.pwd;
    var userDetails = this.ds.userDetails;

    if (accNo && pwd && uName) {
      // alert('Registered');
      const result = this.ds.register(uName, accNo, pwd);
      console.log(accNo);
      console.log(uName);
      console.log(pwd);
      console.log(userDetails);
      console.log(result);

      if (result) {
        alert('Registered Successfully');
        this.router.navigateByUrl('');
      } else alert('Account Number Already Exists');
    } else {
      alert('Please fill all details');
    }
  }
}
