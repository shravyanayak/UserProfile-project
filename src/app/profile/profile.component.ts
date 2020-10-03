import { Component, Input, OnInit } from '@angular/core';
import { UserDetail } from '../models/user-detail.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() currentUser: UserDetail;
  dialogOpen: boolean = false;
  constructor(public usersService: UsersService) { }

  ngOnInit(): void {
  }

}
