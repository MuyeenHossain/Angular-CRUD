import { Component, OnInit } from '@angular/core';
import { User } from '../user';

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

  constructor() { 

  }

  ngOnInit() {
    var data = JSON.parse(localStorage.getItem('userList'));
    if (data) {
      this.userList = data;
    }
    
  }

  addUser(form) {
    
    //this.actionState = 'add';
    if(this.title == 'Update') {
      user = form.value;
      this.userList.push(user);
      localStorage.setItem('userList', JSON.stringify(this.userList));
    }else{
    console.log(form.value);
    var user: User;
    user = form.value;
    this.userList.push(user);

    localStorage.setItem('userList', JSON.stringify(this.userList));
    }

    console.log(this.userList);
  }



  deleteUser(index) {
    //alert(index);
    var result = confirm('Are you sure?');
    for(let i = 0; i < this.userList.length; i++) {
      if(index == i){
        this.userList.splice(i,1);
        break;
      }
    }
    localStorage.setItem('userList', JSON.stringify(this.userList));
  }

  editUser(user, index) {
    this.title = 'Update';
    this.name = user.name;
    this.contact = user.contact;
    this.email = user.email;

    this.actionState = 'edit';
    this.store = index;
    console.log(user);
  }

  update() {
    
  }

  
 
  
}
