import { Component, Input, OnInit } from '@angular/core';
import { UserDetail } from '../models/user-detail.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input() currentUser: UserDetail;
  dialogOpen: boolean = false;
  constructor(public usersService: UsersService) { }

  ngOnInit(): void {
  }

}
