import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  fname: string;
  constructor(private s: DataService) { }

  ngOnInit() {
    this.fname = localStorage.getItem("LoggedInUser");
    console.log('username', this.fname);
  }

}
