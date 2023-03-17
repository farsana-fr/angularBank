import { Component, OnInit } from '@angular/core';
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

  constructor(private ds: DataService) {}

  ngOnInit(): void {}

  register() {
    if (this.accNo && this.pwd && this.uName) {
      alert('OKAY');
    } else {
      alert('Please fill all details');
    }
    // alert('Registered');
    var userDetails = this.ds.userDetails;
    console.log(this.accNo);
    console.log(this.uName);
    console.log(this.pwd);
  }
}
