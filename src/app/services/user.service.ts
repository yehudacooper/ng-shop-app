import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private link = 'http://localhost:51349/api/user';
  public userList:Array<User> = [];
  public singleUser:User;
  constructor(private myHttpClient: HttpClient) {
      this.getUsers();
  }
  // GET : get all users from server (and save the returned value to a property in this service)
  getUsers(): void {
      this.myHttpClient.get(this.link)
          .subscribe((x: Array<User>) => { this.userList = x; });
  }

  // GET : get a specific user (by userName) from server (and save the returned value to a property in this service)
  getUser(userName: string): void {
      this.myHttpClient.get(`${this.link}?userName=${userName}`)
          .subscribe((x: User) => { this.singleUser = x; });
  }


   getUserForEdit(userName: string, callback: (user: User) => void): void {

      this.myHttpClient.get(`${this.link}?userName=${userName}`)
          .subscribe((x: User) => { callback(x); });
  }

}
