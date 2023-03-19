import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser:any;
  constructor() { }

  userDetails: any = {
    1001: { acno: 1001, username: 'amal', password: 'abc123', balance: 0 },
    1002: { acno: 1002, username: 'raj', password: 'abc123', balance: 0 },
    1003: { acno: 1003, username: 'deepak', password: 'abc123', balance: 0 },
    1004: { acno: 1004, username: 'anu', password: 'abc123', balance: 0 },
  };

  register(uName:any,acno:any,pwd:any)
  {
    if(acno in this.userDetails)
    {
      return false;
    }
    else
    {
      this.userDetails[acno]={acno,username:uName,password:pwd,balance:0}
      return true;
    }
  }
  login(acno:any,pwd:any)
  {
    var uDetails=this.userDetails;
    if (acno in uDetails) {
      console.log(uDetails[acno]['password']);
      if (pwd == uDetails[acno]['password']) {
        this.currentUser=uDetails[acno]["username"];
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    } 
  }
}
