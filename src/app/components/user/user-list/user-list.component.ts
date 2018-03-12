import { User } from './../../../shared/models/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: Array<User> = [];
  searchText: String;

  onCreateUser(user: User) {
    console.log(this.users);
    this.users.push(user);
  }

  deleteUser(user: User) {
    this.users.splice(this.users.indexOf(user), 1);
  }
}
