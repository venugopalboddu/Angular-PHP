import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firebase: AngularFireDatabase, private myRoute: Router, private fb: FormBuilder) { }
  employeeList: AngularFireList<any>;

  form = this.fb.group({
    $key: [null],
    email: ['', [Validators.required, Validators.email]],
    uname: ['', [Validators.required, Validators.minLength(6)]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  getEmployees() {
    this.employeeList = this.firebase.list('oemployees');
    return this.employeeList.snapshotChanges();
  }

  insertEmp(employee) {
    this.employeeList.push({
      email: employee.email,
      uname: employee.uname,
      password: employee.password
    });
  }
  sendToken(token: string) {
    localStorage.setItem('LoggedInUser', token);
  }
  getToken() {
    return localStorage.getItem('LoggedInUser');
  }
  isLoggedIn() {
    return this.getToken() !== null;
  }
  logout() {
    localStorage.removeItem('LoggedInUser');
    this.myRoute.navigate(['login']);
  }
  login() {
    localStorage.removeItem('LoggedInUser');
    this.myRoute.navigate(['login']);
  }
}
