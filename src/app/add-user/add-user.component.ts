import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userList: User[] = [];
  title = 'Add User';

  constructor(private router: Router) { }

  ngOnInit() {
    var data = JSON.parse(localStorage.getItem('userList'));
    if (data) {
      this.userList = data;
    }
  }

  addUser(form) {
    
    //this.actionState = 'add';

    console.log(form.value);
    var user: User;
    user = form.value;
    this.userList.push(user);
    
    localStorage.setItem('userList', JSON.stringify(this.userList));
    this.router.navigate(['']);

    //console.log(this.userList);
  }

}
