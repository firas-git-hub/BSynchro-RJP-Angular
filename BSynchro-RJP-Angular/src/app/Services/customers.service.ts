import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CreateAccountForUserModel } from '../Models/Entities/create-account-for-user-model';
import { CreateNewUserModel } from '../Models/Entities/create-new-user-model';
import { User } from '../Models/Entities/user';
import { UserInfo } from '../Models/Entities/user-info';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private customersApiUrl = "https://localhost:7192";
  private getUserInfoActionUrl = "/Users/GetUser/";
  private createAccountForUserActionUrl = "/Users/CreateNewAccountForUser";
  private createNewUserActionUrl = "/Users/CreateUser";
  private getAllUsersActionUrl = "/Users/GetAllUsers";

  constructor(private http: HttpClient) { }

  getUserInfo = (userId: number) => {
    try {
      const headers = new HttpHeaders()
        .set("Content-Type", "application/json")
        .set('Access-Control-Allow-Origin', this.customersApiUrl);
      return this.http.get<UserInfo>(this.customersApiUrl + this.getUserInfoActionUrl + userId, { headers });
    } catch (error) {
      console.log("CustomersService -> getUserInfo : " + error);
      return null;
    }
  }

  createNewAccountForUser = (newAccount: CreateAccountForUserModel) => {
    try {
      let createAccountForUserData: CreateAccountForUserModel = newAccount;
      const headers = new HttpHeaders()
        .set("Content-Type", "application/json");
      return this.http.post(this.customersApiUrl + this.createAccountForUserActionUrl, createAccountForUserData, { headers });
    } catch (error) {
      console.log("CustomersService -> createNewAccountForUser : " + error);
      return null;
    }
  }

  createNewUser = (newUserInfo: CreateNewUserModel) => {
    try {
      const headers = new HttpHeaders()
        .set("Content-Type", "application/json");
      return this.http.post(this.customersApiUrl + this.createNewUserActionUrl, newUserInfo, { headers });
    } catch (error) {
      console.log("CustomersService -> createNewUser : " + error);
      return null;
    }
  }

  getAllUsers = () => {
    try {
      const headers = new HttpHeaders()
        .set("Content-Type", "application/json");
      return this.http.get<User[]>(this.customersApiUrl + this.getAllUsersActionUrl, { headers });
    } catch (error) {
      console.log("CustomersService -> getAllUsers : " + error);
      return null;
    }
  }
}
