import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateNewUserDialogComponent } from 'src/app/Components/create-new-user-dialog/create-new-user-dialog.component';
import { UserInfoTableComponent } from 'src/app/Components/user-info-table/user-info-table.component';
import { User } from 'src/app/Models/Entities/user';
import { ResourcesLanguagesEnum } from 'src/app/Models/Enums/resources-languages-enum';
import { ConfigurationService } from 'src/app/Services/configuration.service';
import { CustomersService } from 'src/app/Services/customers.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {

  @ViewChild(UserInfoTableComponent) userInfoTableComponentChild!: UserInfoTableComponent;
  resources: any;
  users!: User[];

  constructor(
    private config: ConfigurationService,
    private customersService: CustomersService,
    public dialog: MatDialog,
  ) { }

  async ngOnInit() {
    await this.fillComponentData();
  }

  fillComponentData = async () => {
    try {
      this.resources = await this.config.getResourcesFromPath("/assets/resources.json", ResourcesLanguagesEnum[document.documentElement.lang.toString() as ResourcesLanguagesEnum]).then(result => this.resources = result);
      this.getAllUsers();
    } catch (error) {
      console.error("UsersPageComponent -> fillComponentData : " + error);
    }
  }

  addUser = () => {
    try {
      const dialogRef = this.dialog.open(CreateNewUserDialogComponent, {
        width: "20rem",
        data: {
          Name: "",
          Surname: ""
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result != null) {
          this.customersService.createNewUser(result)?.subscribe(result => {
            if (result) {
              this.getAllUsers();
            }
          });
        }
      });
    } catch (error) {
      console.error("UsersPageComponent -> addUser : " + error);
    }
  }

  getAllUsers = () => {
    let response = this.customersService.getAllUsers();
    if (response) {
      response.subscribe(result =>{
        this.users = result;
        setTimeout(() => this.userInfoTableComponentChild.setDataSource(), 200);
      });
    }
  }
}
