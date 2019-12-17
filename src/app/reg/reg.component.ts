import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  fdata: any;
  results: any;
  submitted = false;
  emplye: any;
  searchText;
  msg: string;
  val: boolean;
  val1: boolean;
  reg: any;
  constructor(private s: DataService, private fb: FormBuilder, private router: Router) { }
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    uname: ['', [Validators.required, Validators.minLength(6)]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })
  ngOnInit() {

  }

  get sf() { return this.form.controls; }
  onSignup() {
    this.submitted = true;
    let regDetails = {
      email: this.form.controls['email'].value,
      uname: this.form.controls['uname'].value
    }
    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
    this.s.already(regDetails).subscribe((res) => {
      console.log(res);
      this.reg = res;
      if (this.reg == ("Username already exists")) {
        this.val = true;
        //this.form.reset();
        this.submitted = false;
      } else if(this.reg == "Email already exists"){
        this.val = true;
        //this.form.reset();
        this.submitted = false;
      }
      else {
        alert('Are you sure want to enter data ?')
        this.s.po(this.form.value).subscribe(res => {
          console.log("register", res);
          this.router.navigate(['/login']);
          this.val = false;
        
        });
      }
    });


  }

}
