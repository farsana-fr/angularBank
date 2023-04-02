import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  constructor(
    private router: Router,
    private ds: DataService,
    private fb: FormBuilder
  ) {}

  //model for Register
  registerForm = this.fb.group({
    uName: ['', [Validators.required]],
    accNo: ['', [Validators.required]],
    pwd: ['', [Validators.required]],
  });

  ngOnInit(): void {}

  register() {
    var uName = this.registerForm.value.uName;
    var accNo = this.registerForm.value.accNo;
    var pwd = this.registerForm.value.pwd;
    var userDetails = this.ds.userDetails;
    console.log(this.registerForm);
    if (this.registerForm.valid) {
      // alert('Registered');
      this.ds.register(uName, accNo, pwd).subscribe((result: any) => {
          alert(result.message);
          this.router.navigateByUrl('/');
        },result=>{
          alert(result.error.message);
        }
        )
      console.log(uName);
      console.log(pwd);
      console.log(userDetails);
    } else {
      alert('Please fill correct details');
    }
  }
}
