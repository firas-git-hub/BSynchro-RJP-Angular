import { Component, OnInit } from '@angular/core';
import { UserInfo } from 'src/app/Models/user-info';
import { CustomersService } from 'src/app/Services/customers.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  userInfoData!: UserInfo;
  constructor(
    private customersService: CustomersService
  ) { }

  ngOnInit(): void { 
  }

}
