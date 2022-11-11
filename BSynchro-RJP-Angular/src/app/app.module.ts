import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainPageComponent } from './Pages/main-page/main-page.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { AngularMaterialModuleModule } from './Modules/angular-material-module/angular-material-module.module';
import { PageActionCardComponent } from './Components/page-action-card/page-action-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavBarComponent,
    PageActionCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularMaterialModuleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
