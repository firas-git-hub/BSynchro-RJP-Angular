import { Component, OnInit } from '@angular/core';
import { UserInfo } from 'src/app/Models/Entities/user-info';
import { CustomersService } from 'src/app/Services/customers.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  userInfoData!: UserInfo;
  constructor(
    private customersService: CustomersService
  ) { }

  ngOnInit(): void {
  }

  fillComponentData = () => {
    try {
      let response = this.customersService.getUserInfo(1);
      if(response) {
        response.subscribe(result => this.userInfoData = result);
      }
    } catch (error) {
      console.error(error);
    }
  }

}
