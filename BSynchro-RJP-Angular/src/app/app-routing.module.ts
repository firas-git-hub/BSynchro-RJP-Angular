import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './Pages/main-page/main-page.component';
import { NotFoundPageComponent } from './Pages/not-found-page/not-found-page.component';
import { UsersPageComponent } from './Pages/users-page/users-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'Users', component: UsersPageComponent },
  {path: '404', component: NotFoundPageComponent},
  {path: '**', redirectTo: '/404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }