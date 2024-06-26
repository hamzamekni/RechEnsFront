import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUserList()
      .subscribe(users => this.users = users);
  }
  deleteUser(userId: number): void {
    this.userService.deleteUser(userId)
      .subscribe(() => {
        // Remove the deleted user from the users array
        this.users = this.users.filter(user => user.userId !== userId);
      });
  }
}

