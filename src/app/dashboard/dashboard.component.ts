import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  fname: string;
  status: boolean = true;
  constructor(private s: DataService, private router: Router) { 
    history.pushState(null, null, location.href);
    window.onpopstate = function () {
        history.go(1);
    };
  }
  ngOnInit() {
    this.fname = localStorage.getItem("LoggedInUser");
    console.log('username', this.fname);
  }
  apply() {
    this.status = false;
  }
}
