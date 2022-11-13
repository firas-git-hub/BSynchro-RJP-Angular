import { DataSource } from '@angular/cdk/collections';
import { Component, Input, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, ReplaySubject } from 'rxjs';
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
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  datasource: MatTableDataSource<User> = new MatTableDataSource();
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
    } catch (error) {
      console.error("UserInfoTableComponent -> fillComponentData : " + error);
    }
  }

  setDataSource = () => {
    if (this.users) {
      this.datasource = new MatTableDataSource(this.users);
      this.datasource.paginator = this.paginator;
    }
  }
}
