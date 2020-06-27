import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted = false;
  val: boolean;
  loindetatils:any;
  
  constructor(private s: DataService, private fb: FormBuilder, private router: Router, private http: HttpClient) { }

  form = this.fb.group({
    id: [],
    uname: ['', Validators.required],
    password: ['', Validators.required]
  });
  ngOnInit() {
   
  }
  get f() { return this.form.controls; }

  onSubmit() {
  //debugger;
    this.submitted = true;
    let loginDetails = {
      uname: this.form.controls['uname'].value,
      password: this.form.controls['password'].value
    }
    if (this.form.invalid) {
      return;
    }
    this.s.login1(loginDetails).subscribe(resp => {
      console.log(resp);
      this.loindetatils = resp;
      if (this.loindetatils=="Your Login Name or Password is invalid") {
        this.val = true;
        this.form.reset();
        this.submitted = false;
      }else{
        //alert("Login successfull");
        this.s.sendToken(this.form.value.uname);
        this.router.navigate(['/dash']);
        this.val = false;
      }
    });
  }
}
