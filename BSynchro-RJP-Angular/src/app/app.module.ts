import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainPageComponent } from './Pages/main-page/main-page.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { AngularMaterialModuleModule } from './Modules/angular-material-module/angular-material-module.module';
import { UsersPageComponent } from './Pages/users-page/users-page.component';
import { NotFoundPageComponent } from './Pages/not-found-page/not-found-page.component';
import { UserInfoTableComponent } from './Components/user-info-table/user-info-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateNewUserDialogComponent } from './Components/create-new-user-dialog/create-new-user-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavBarComponent,
    UsersPageComponent,
    NotFoundPageComponent,
    UserInfoTableComponent,
    CreateNewUserDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularMaterialModuleModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
