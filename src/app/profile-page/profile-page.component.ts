import { Component, OnInit } from '@angular/core';
import { UserDetail } from '../models/user-detail.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  currentTab = 'profile';
  expanded: boolean = false;
  currentUser: UserDetail;
  otherUsers: UserDetail[];
  openChats: any[];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.currentUser = this.usersService.selectedUser;
    this.otherUsers = this.usersService.allUsers;
    this.otherUsers.filter((user) => {
      return (user.name === this.currentUser.name) ? null : user;
    });
  }

  openChat(user: UserDetail) {
     
    this.openChats.push(user);
  }
}
