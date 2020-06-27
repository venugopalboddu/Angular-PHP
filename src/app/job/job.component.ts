import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { allSettled } from 'q';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  submitted = false;
  data: any;
  fname: string;
  email: any;
  email1: any;
  email2: any;
  i: any;
  val: boolean;
  status1: boolean = true;
  status2: boolean = false;
  msg: any;
  courses: any = ['Java', '.Net', 'UI', 'Python'];
  education: any = ['B.E', 'B.Tech', 'M.E', 'M.Tech', 'MCA', 'Others'];

  constructor(private fb: FormBuilder, private s: DataService) { }
  form = this.fb.group({
    uname: [''],
    email: [''],
    edu: ['', Validators.required],
    course: ['', Validators.required]
  });
  ngOnInit() {
    //debugger;
    this.fname = localStorage.getItem("LoggedInUser");
    console.log('username', this.fname);

    this.s.ge().subscribe((res) => {
      this.email1 = res;
      console.log(this.email1.length);

      for (this.i = 0; this.i < this.email1.length; this.i++) {
        if (this.fname == this.email1[this.i].uname) {
          this.email2 = this.email1[this.i];
        }
      }
      console.log(this.email2);
    });

    this.form.controls['uname'].disable();
    this.form.controls['email'].disable();
  }

  get f() { return this.form.controls; }

  changeCourse(e) {
    console.log(e.value)
    this.course.setValue(e.target.value, {
      onlySelf: true
    })
  }
  get course() {
    return this.form.get('course');
  }

  changeEducation(e) {
    console.log(e.value);
    this.edu.setValue(e.target.value, {
      onlySelf: true
    })
  }

  get edu() {
    return this.form.get('edu');
  }

  onSubmit() {
    this.submitted = true;
    let jobDetails = {
      uname: this.form.controls['uname'].value,
      email: this.form.controls['email'].value,
      edu: this.form.controls['edu'].value,
      course: this.form.controls['course'].value
    }
    if (this.form.invalid) {
      //return;
      this.val = true;

    } else {
      this.s.postData(jobDetails).subscribe((res)=>{
         console.log(res);
      });
      this.msg = "Your job has been applied successfully";
      this.val = false;
      this.status1 = false;
      this.status2 = true;
    }
  }
}
