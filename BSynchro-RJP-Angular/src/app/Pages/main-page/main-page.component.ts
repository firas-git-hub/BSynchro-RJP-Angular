import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/Entities/user';
import { UserInfo } from 'src/app/Models/Entities/user-info';
import { ResourcesLanguagesEnum } from 'src/app/Models/Enums/resources-languages-enum';
import { ConfigurationService } from 'src/app/Services/configuration.service';
import { CustomersService } from 'src/app/Services/customers.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  userInfoData!: User[];
  resources!: any;
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
    } catch (error) {
      console.error("MainPageComponent -> fillComponentData : " + error);
    }
  }

}
