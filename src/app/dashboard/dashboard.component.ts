import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  user: any;

  inputAccNo = 'Enter Account No';
  inputPWD = 'Enter your Password';
  lgnPwd = 'lgnPwd';

  accNo = '';
  pwd: any;
  amt = '';

  accNo1 = '';
  pwd1: any;
  amt1 = '';

  constructor(private ds: DataService) {
    this.user = this.ds.currentUser;
  }
  ngOnInit(): void {}

  deposit() {
    var accNo = this.accNo;
    var pwd = this.pwd;
    var amt = Number.parseInt(this.amt);
    const newBalnc = this.ds.deposit(accNo, pwd, amt);
    console.log("Deposit");
    if (newBalnc) {
      this.ds.userDetails[accNo]['balance'] += amt;
      alert(`Your account is credited with Rs.${amt}.\nBalance is Rs.${newBalnc}`);
    }
  }
  withdraw() {
    var accNo = this.accNo1;
    var pwd = this.pwd1;
    var amt = Number.parseInt(this.amt1);
    var currentBalance=this.ds.userDetails[accNo]["balance"];
    console.log("Withdraw");
    if(currentBalance>0 && currentBalance>=amt)
    {
      const newBalnc=this.ds.withdraw(accNo,pwd,amt);
     console.log(this.ds.userDetails[accNo]["balance"]);
     alert(`Your account is debited with Rs.${amt}.\nBalance is Rs.${newBalnc}`);
    }
    else
    {
      alert(`Insufficient Balance!!`);
    }
  }
}
