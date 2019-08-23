import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  //userList: User[] = [];

  name; email; contact;
  store;
  title = 'Update';
  userList: User[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
    var data = JSON.parse(localStorage.getItem('singleUserData'));
    //console.log(data);
    //var indexnum = JSON.parse(localStorage.getItem('indexsingleUserIndex'));

    this.name = data.name;
    this.contact = data.contact;
    this.email = data.email;
    var data = JSON.parse(localStorage.getItem('userList'));
    if (data) {
      this.userList = data;
    }
  }

  updateUser(form) {
    console.log(form.value);
    var indexnum = JSON.parse(localStorage.getItem('singleUserIndex'));
    for (let l = 0; l < this.userList.length; l++) {
      if (l == indexnum) {
        console.log(l);
        // this.userList.push(form.value);
        // delete this.userList[l];
        this.userList[l] = form.value;
        
        break;
      }

    }
    localStorage.setItem('userList', JSON.stringify(this.userList));

    this.router.navigate(['']);
  }

}
