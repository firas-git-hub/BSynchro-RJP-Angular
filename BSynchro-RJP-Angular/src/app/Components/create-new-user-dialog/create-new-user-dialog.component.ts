import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ResourcesLanguagesEnum } from 'src/app/Models/Enums/resources-languages-enum';
import { ConfigurationService } from 'src/app/Services/configuration.service';

@Component({
  selector: 'app-create-new-user-dialog',
  templateUrl: './create-new-user-dialog.component.html',
  styleUrls: ['./create-new-user-dialog.component.scss']
})
export class CreateNewUserDialogComponent implements OnInit {

  resources: any;

  constructor(
    public dialogRef: MatDialogRef<CreateNewUserDialogComponent>,
    private config: ConfigurationService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    this.fillComponentData();
  }

  fillComponentData = async () => {
    try {
      this.resources = await this.config.getResourcesFromPath("/assets/resources.json", ResourcesLanguagesEnum[document.documentElement.lang.toString() as ResourcesLanguagesEnum]).then(result => this.resources = result);
    } catch (error) {
      console.error("UsersPageComponent -> fillComponentData : " + error);
    }
  }
}
