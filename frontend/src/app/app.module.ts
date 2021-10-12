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
import { CalendarComponent } from './components/doctors/calendar/calendar.component';
import { MyPatientsComponent } from './components/doctors/my-patients/my-patients.component';
import { MyDoctorsComponent } from './components/users/my-doctors/my-doctors.component';
import { DashboardComponent } from './components/doctors/dashboard/dashboard.component';
import { PaymentComponent } from './components/payment/payment.component';

import { ProfileUserComponent } from './components/users/profile-user/profile-user.component';
import { DashboardUsersComponent } from './components/users/dashboard-users/dashboard-users.component';
import { DashboardAdminsComponent } from './components/container/dashboard-admins/dashboard-admins.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { ProfileDoctorComponent } from './components/doctors/profile-doctor/profile-doctor.component';
import { ProfileAdminComponent } from './components/admin/profile-admin/profile-admin.component';
<<<<<<< HEAD
=======

import { PaymentComponent } from './components/payment/payment.component';
>>>>>>> 772edac6448633c69152af639d65569aecf13688

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
    CalendarComponent,
    MyPatientsComponent,
    MyDoctorsComponent,
    DashboardComponent,
<<<<<<< HEAD
    PaymentComponent,
    
=======
>>>>>>> 772edac6448633c69152af639d65569aecf13688
    ProfileUserComponent,
    DashboardUsersComponent,
    DashboardAdminsComponent,
    ProfileDoctorComponent,
    ProfileAdminComponent,
<<<<<<< HEAD
=======
    PaymentComponent,
>>>>>>> 772edac6448633c69152af639d65569aecf13688
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    NgxMaterialTimepickerModule,
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
