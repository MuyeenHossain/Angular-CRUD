import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';



@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  userList: User[] = [];

  name; email; contact;
  actionState;
  store;
  title = 'Add User';

  constructor(private router: Router) {

  }

  ngOnInit() {

    var data = JSON.parse(localStorage.getItem('userList'));
    if (data) {
      this.userList = data;
    }
  }

  editUser(user, index) {
    
    localStorage.setItem('singleUserData', JSON.stringify(user));
    localStorage.setItem('singleUserIndex', JSON.stringify(index));
    
    this.store = index;
    console.log(user);
    this.router.navigate(['edituser']);
  }


  deleteUser(index) {
    //alert(index);
    var result = confirm('Are you sure?');
    for (let i = 0; i < this.userList.length; i++) {
      if (index == i) {
        this.userList.splice(i, 1);
        break;
      }
    }
    localStorage.setItem('userList', JSON.stringify(this.userList));
  }


}
