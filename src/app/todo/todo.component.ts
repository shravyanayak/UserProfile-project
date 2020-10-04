import { Component, Input, OnInit } from '@angular/core';
import { UserDetail } from '../models/user-detail.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() currentUser: UserDetail;
  dialogOpen: boolean = false;
  constructor(public usersService: UsersService) { }

  ngOnInit(): void {
  }
}
