import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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

  constructor(private ds: DataService, private fb: FormBuilder) {
    this.user = this.ds.currentUser;
    this.user=localStorage.getItem("currentUser")
  }
  ngOnInit(): void {}
  depositForm = this.fb.group({
    accNo: [''],
    pwd: [''],
    amt: [''],
  });

  withdrawForm = this.fb.group({
    accNo1: [''],
    pwd1: [''],
    amt1: [''],
  });
  deposit() {
    var accNo = this.depositForm.value.accNo;
    var pwd = this.depositForm.value.pwd;
    var amt = this.depositForm.value.amt;
    // amt=Number.parseInt(this.amt);
    console.log(this.depositForm.valid);
    if (this.depositForm.valid) {
      const newBalnc = this.ds.deposit(accNo, pwd, amt);
      console.log('Deposit');
      if (newBalnc) {
        alert(
          `Your account is credited with Rs.${amt}.\nBalance is Rs.${newBalnc}`
        );
      }
    } else {
      alert('Invalid Form');
    }
  }
  withdraw() {
    var accNo = this.withdrawForm.value.accNo1;
    var pwd = this.withdrawForm.value.pwd1;
    var amt = this.withdrawForm.value.amt1;
    console.log(accNo, pwd, amt);
    console.log(this.ds.userDetails);
    if (this.withdrawForm.valid && accNo) {
      const newBalnc = this.ds.withdraw(accNo, pwd, amt);
      alert(
        `Your account is debited with Rs.${amt}.\nBalance is Rs.${newBalnc}`
      );
    } else {
      alert('Invalid Form');
    }
  }
}
