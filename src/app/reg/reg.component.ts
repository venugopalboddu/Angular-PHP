import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  submitted = false;
  
  showDeletedMessage: boolean;
  showSuccessMessage: boolean;
  customerArray = [];
  name:any;
  email:any;
  status: boolean = false;
  val1: boolean;
  constructor(private s: DataService, private router: Router) {
   }
  ngOnInit() {

  }

  get sf() { return this.s.form.controls; }

  sendFirebase() {
   // debugger;
    this.submitted = true;
    this.name = this.s.form.controls['uname'].value,
    this.email = this.s.form.controls['email'].value
    let regDetails = {
      email: this.s.form.controls['email'].value,
      uname: this.s.form.controls['uname'].value
    }

    this.s.getEmployees().subscribe(
      list => {
        this.customerArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });

      });
      if (this.s.form.invalid) {
        this.val1 = true;
        return;
      }
        for(let i = 0; i < this.customerArray.length; i++) {
          console.log(this.customerArray);
          if (this.customerArray[i].uname == this.name && this.customerArray[i].email == this.email) {
            this.status = true;
            this.val1 = false;
            this.s.form.reset();
            this.submitted = false;
            this.showDeletedMessage = true;
            setTimeout(() => this.showDeletedMessage = false, 3000);
          }
        }
        // this.s.form.get('$key').value == null
        
      if(this.status == false && this.s.form.get('$key').value == null){
        //alert('Are you sure want to enter data ?')
        this.s.insertEmp(this.s.form.value);
        this.s.form.reset();
          this.submitted = false;
        //this.router.navigate(['/login']);
         this.showSuccessMessage = true;
         setTimeout(() => this.showSuccessMessage = false, 3000);
      }
}
  }

