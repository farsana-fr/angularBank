import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  user:any;

  inputAccNo = 'Enter Account No';
  inputPWD = 'Enter your Password';
  lgnPwd = 'lgnPwd';

  accNo = '';
  pwd: any;

  constructor(private ds:DataService)
  {
    this.user=this.ds.currentUser;
  }
  ngOnInit():void{}

  deposit()
  {

  }
  withdraw()
  {
    
  }
}
