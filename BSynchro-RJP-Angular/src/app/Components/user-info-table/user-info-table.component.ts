import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/Models/Entities/user';
import { ResourcesLanguagesEnum } from 'src/app/Models/Enums/resources-languages-enum';
import { ConfigurationService } from 'src/app/Services/configuration.service';
import { CustomersService } from 'src/app/Services/customers.service';

@Component({
  selector: 'app-user-info-table',
  templateUrl: './user-info-table.component.html',
  styleUrls: ['./user-info-table.component.scss']
})
export class UserInfoTableComponent implements OnInit {

  @Input() users: User[] = [];
  usersTableColumnsToShow = [
    "id",
    "name",
    "surname"
  ]
  resources: any;
  
  constructor(
    private customersService: CustomersService,
    private config: ConfigurationService
  ) { }

  async ngOnInit() {
    await this.fillComponentData();
  }

  fillComponentData = async () => {
    try {
      this.resources = await this.config.getResourcesFromPath("/assets/resources.json", ResourcesLanguagesEnum[document.documentElement.lang.toString() as ResourcesLanguagesEnum]).then(result => this.resources = result);
      let response = this.customersService.getAllUsers();
      if (response) {
        response.subscribe(result => this.users = result);
      }
    } catch (error) {
      console.error("UserInfoTableComponent -> fillComponentData : " + error);
    }
  }
}
