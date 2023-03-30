import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  currentUser: any;
  currentAccNo: any;
  constructor() {}

  userDetails: any = {
    1001: {
      acno: 1001,
      username: 'amal',
      password: 'abc123',
      balance: 0,
      transaction: [],
    },
    1002: {
      acno: 1002,
      username: 'raj',
      password: 'abc123',
      balance: 0,
      transaction: [],
    },
    1003: {
      acno: 1003,
      username: 'deepak',
      password: 'abc123',
      balance: 0,
      transaction: [],
    },
    1004: {
      acno: 1004,
      username: 'anu',
      password: 'abc123',
      balance: 0,
      transaction: [],
    },
  };

  register(uName: any, acno: any, pwd: any) {
    console.log("register",acno);
    console.log(this.userDetails);
    if (acno in this.userDetails) {
      return false;
    } else {
      this.userDetails[acno] = {
        acno,
        username: uName,
        password: pwd,
        balance: 0,
        transaction: [],
      };
      return true;
    }
  }
  login(acno: any, pwd: any) {
    var uDetails = this.userDetails;
    //to identify user to show transaction history
    this.currentAccNo = acno;
    if (acno in uDetails) {
      console.log(uDetails[acno]['password']);
      if (pwd == uDetails[acno]['password']) {
        this.currentUser = uDetails[acno]['username'];
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  deposit(acno: any, pwd: any, amt: any) {
    if (acno in this.userDetails) {
      if (pwd == this.userDetails[acno]['password']) {
        this.userDetails[acno]['balance'] += Number.parseInt(amt);
        this.userDetails[acno]['transaction'].push({
          type: 'CREDIT',
          amount: Number.parseInt(amt),
        });
        console.log(this.userDetails[acno]);
        return this.userDetails[acno]['balance'];
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  withdraw(acno: any, pwd: any, amt: any) {
    if (acno in this.userDetails) {
      if (pwd == this.userDetails[acno]['password']) {
        this.userDetails[acno]['balance'] -= Number.parseInt(amt);
        this.userDetails[acno]['transaction'].push({
          type: 'DEBIT',
          amount: Number.parseInt(amt),
        });
        console.log(this.userDetails[acno]);
        return this.userDetails[acno]['balance'];
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  getTransaction(acno: any) {
    return this.userDetails[acno]['transaction'];
  }
}
