import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { FooterComponent } from './tools/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ListDoctorsComponent } from './components/doctors/list-doctors/list-doctors.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { UsersComponent } from './components/users/users.component';
import { ListUsersComponent } from './components/users/list-users/list-users.component';
import { AppointmentsComponent } from './components/users/appointments/appointments.component';
import { AppointmentsListComponent } from './components/appointments/appointments-list/appointments-list.component';
import { AppointmentsNewComponent } from './components/appointments/appointments-new/appointments-new.component';


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
    FooterComponent,
    AboutComponent,
    ContactComponent,
    ListDoctorsComponent,
    DoctorsComponent,
    UsersComponent,
    ListUsersComponent,
    AppointmentsComponent,
    AppointmentsListComponent,
    AppointmentsNewComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
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
