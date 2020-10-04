import { Component, Input, OnInit } from '@angular/core';
import { UserDetail } from '../models/user-detail.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  @Input() currentUser: UserDetail;
  dialogOpen: boolean = false;
  constructor(public usersService: UsersService) { }

  ngOnInit(): void {
  }

}



