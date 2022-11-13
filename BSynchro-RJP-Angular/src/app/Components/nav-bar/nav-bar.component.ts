import { Component, OnInit } from '@angular/core';
import { ResourcesLanguagesEnum } from 'src/app/Models/Enums/resources-languages-enum';
import { ConfigurationService } from 'src/app/Services/configuration.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  resources: any;

  constructor(
    private config: ConfigurationService
  ) { }

  async ngOnInit() {
    await this.fillComponentData();
  }

  fillComponentData = async () => {
    try {
      this.resources = await this.config.getResourcesFromPath("/assets/resources.json", ResourcesLanguagesEnum[document.documentElement.lang.toString() as ResourcesLanguagesEnum]).then(result => this.resources = result);
    } catch (error) {
      console.error("UserInfoTableComponent -> fillComponentData : " + error);
    }
  }
}
