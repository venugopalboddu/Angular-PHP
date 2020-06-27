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
  loindetatils:any;
  customerArray = [];
  name:any;
  showDeletedMessage: boolean;
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
  
    this.submitted = true;
    
    let loginDetails = {
      uname: this.form.controls['uname'].value,
      password: this.form.controls['password'].value
    }
    
    if (this.form.invalid) {
      return;
    }
    this.s.getEmployees().subscribe(
      list => {
        this.customerArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
    // console.log("name", loginDetails);
    // console.log("test", this.customerArray);

      if (this.name === this.customerArray.find(x=> (x.uname === loginDetails.uname) && (x.password === loginDetails.password))) {
        this.form.reset();
        this.submitted = false;
        this.showDeletedMessage = true;
        setTimeout(() => this.showDeletedMessage = false, 3000);
      }else{
        //alert("Login successfull");
        this.s.sendToken(this.form.value.uname);
        this.router.navigate(['/dash']);
        
      }
    });
  }
}
