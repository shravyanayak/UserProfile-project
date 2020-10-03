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
  currentUser: UserDetail;
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.currentUser = this.usersService.selectedUser;
    console.log("CUrrent user:" + this.currentUser);
  }

}
