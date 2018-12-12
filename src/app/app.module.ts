import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {UsersService} from './services/users.service';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { homepageComponent } from './home.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';

const appRoutes: Routes = [
 { path: '', component: homepageComponent },
  { path: 'view-profile/:id', component: ViewProfileComponent },
    {path: 'home', component: homepageComponent },
]; 
@NgModule({
  declarations: [
    AppComponent,
    ViewProfileComponent,
    homepageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
     RouterModule.forRoot(appRoutes)
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
