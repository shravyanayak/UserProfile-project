import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDetail } from '../models/user-detail.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  selectedUser: UserDetail;
  currentPage: string = 'home';
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get('https://panorbit.in/api/users.json');
  }
}
