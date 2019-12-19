import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private ht: HttpClient, private myRoute: Router) { }

  po(d) {
    return this.ht.post('https://venugopalboddu88.000webhostapp.com/insert.php', d, {responseType: 'text'});
  }
  already(e){
    return this.ht.post('https://venugopalboddu88.000webhostapp.com/already.php', e, {responseType: 'text'});
  }
  ge() {
    return this.ht.get('https://venugopalboddu88.000webhostapp.com/read.php');
  }
  postData(d) {
    return this.ht.post('https://venugopalboddu88.000webhostapp.com/job.php', d);
  }
  login1(d) {
    return this.ht.post('https://venugopalboddu88.000webhostapp.com/login.php', d, {responseType: 'text'});
  }
  sendToken(token: string) {
    localStorage.setItem("LoggedInUser", token);
  }
  getToken() {
    return localStorage.getItem("LoggedInUser");
  }
  isLoggedIn() {
    return this.getToken() !== null;
  }
  logout() {
    localStorage.removeItem("LoggedInUser");
    this.myRoute.navigate(["login"]);
  }
  login() {
    localStorage.removeItem("LoggedInUser");
    this.myRoute.navigate(["login"]);
  }
}
