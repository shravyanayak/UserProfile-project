import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { UserDetail } from '../models/user-detail.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  users: UserDetail[] = [];

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.userService.getData().subscribe((userData) => {
      (userData['users'] as UserDetail[]).forEach((user) => {
        this.users.push(user as UserDetail);
      });
      console.log(this.users);
    });
  }

  selectedUser(user) {
    this.userService.currentPage = 'profilePagae';
    this.userService.selectedUser = user;
  }
}
