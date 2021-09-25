import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavbarComponent } from './tools/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/tokenInterceptor/token-interceptor.service';
import { AdminComponent } from './components/admin/admin.component';
import { Error404Component } from './components/error404/error404.component';
import { RegisterPatientComponent } from './components/register-patient/register-patient.component';
import { RegisterDoctorComponent } from './components/register-doctor/register-doctor.component';
import { ContainerComponent } from './components/container/container.component';
import { ContainerNavbarComponent } from './components/container/container-navbar/container-navbar.component';
import { ContainerSidebarComponent } from './components/container/container-sidebar/container-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    NavbarComponent,
    HomeComponent,
    AdminComponent,
    Error404Component,
    RegisterPatientComponent,
    RegisterDoctorComponent,
    ContainerComponent,
    ContainerNavbarComponent,
    ContainerSidebarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
