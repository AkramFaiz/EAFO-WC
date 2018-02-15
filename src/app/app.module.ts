import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { IosComponent } from './ios/ios.component';
import { AndroidComponent } from './android/android.component';
import { HybridComponent } from './hybrid/hybrid.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { LoginService } from './login.service';
import { IOsdataService } from './i-osdata.service';
import { AndDataService } from './and-data.service';
import { HybdataService} from './hybdata.service';
import { WebDataService } from './web-data.service';

import { AuthGuard } from './auth.guard';
import { HeaderComponent } from './header/header.component';
import { DesktopComponent } from './desktop/desktop.component';
import { IosListComponent } from './ios-list/ios-list.component';
import { HybListComponent } from './hyb-list/hyb-list.component';
import { WebListComponent } from './web-list/web-list.component';
import { AndroidListComponent } from './android-list/android-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ListViewComponent } from './list-view/list-view.component';
import {HttpModule} from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateItemIosComponent } from './create-item-ios/create-item-ios.component';
import { CreateItemWebComponent } from './create-item-web/create-item-web.component';
import { CreateItemHybComponent } from './create-item-hyb/create-item-hyb.component';
import { CreateItemAndComponent } from './create-item-and/create-item-and.component';
import { BlurbgComponent } from './blurbg/blurbg.component';


const appRoutes:Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'login/:name',
    component: LoginComponent
  },
  {
    path: 'sign',
    component: SignupComponent
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    component: HomeComponent
  },
  {
    path: 'list',
    canActivate: [AuthGuard],
    component: ListViewComponent
  },
  {
    path: 'iOS',
    canActivate: [AuthGuard],
    component: IosComponent
  },
  {
    path: ' android',
    canActivate: [AuthGuard],
    component: AndroidComponent
  },
  {
    path: 'hydrid',
    canActivate: [AuthGuard],
    component: HybridComponent
  },
  {
    path: 'iosList',
    canActivate: [AuthGuard],
    component: IosListComponent
  },
  {
    path: 'andList',
    canActivate: [AuthGuard],
    component: AndroidListComponent
  },
  {
    path: 'hybList',
    canActivate: [AuthGuard],
    component: HybListComponent
  },
  {
    path: 'webList',
    canActivate: [AuthGuard],
    component: WebListComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    IosComponent,
    AndroidComponent,
    HybridComponent,
    WelcomeComponent,
    HeaderComponent,
    DesktopComponent,
    IosListComponent,
    HybListComponent,
    WebListComponent,
    AndroidListComponent,
    NavBarComponent,
    ListViewComponent,
    CreateItemIosComponent,
    CreateItemWebComponent,
    CreateItemHybComponent,
    CreateItemAndComponent,
    BlurbgComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpModule
  ],
  providers: [LoginService,AuthGuard,IOsdataService,AndDataService,HybdataService,WebDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
