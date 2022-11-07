import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CreateAccountForUserModel } from '../Models/create-account-for-user-model';
import { UserInfo } from '../Models/user-info';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  customersApiUrl = "https://localhost:7192";
  getUserInfoActionUrl = "/Users/GetUser/";
  createAccountForUserActionUrl = "/Users/CreateNewAccountForUser";

  constructor(private http: HttpClient) { }

  getUserInfo = (userId: number) => {
    try {
      const headers = new HttpHeaders()
        .set("Content-Type", "application/json");
      return this.http.get<UserInfo>(this.customersApiUrl + this.getUserInfoActionUrl + userId, { headers });
    } catch (error) {
      console.log("Error getUserInfo : " + error);
      return null;
    }
  }

  createNewAccountForUser = (userId: number, initialCredit: number) => {
    try {
      let createAccountForUserData: CreateAccountForUserModel = {
        userId: userId,
        initialCredit: initialCredit
      }
      const headers = new HttpHeaders()
        .set("Content-Type", "application/json");
      return this.http.post(this.customersApiUrl + this.createAccountForUserActionUrl, createAccountForUserData, { headers });
    } catch (error) {
      console.log("Error getUserInfo : " + error);
      return null;
    }
  }
}
