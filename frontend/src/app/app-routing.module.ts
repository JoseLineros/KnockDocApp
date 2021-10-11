import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { Error404Component } from './components/error404/error404.component';
import { RegisterPatientComponent } from './components/register-patient/register-patient.component';
import { RegisterDoctorComponent } from './components/register-doctor/register-doctor.component';
import { ContainerComponent } from './components/container/container.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ListDoctorsComponent } from './components/doctors/list-doctors/list-doctors.component';
import { ListUsersComponent } from './components/users/list-users/list-users.component';
import { AppointmentsListComponent } from './components/appointments/appointments-list/appointments-list.component';
import { AppointmentsNewComponent } from './components/appointments/appointments-new/appointments-new.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { CalendarComponent } from './components/doctors/calendar/calendar.component';
import { MyPatientsComponent } from './components/doctors/my-patients/my-patients.component';
import { UsersComponent } from './components/users/users.component';
import { MyDoctorsComponent } from './components/users/my-doctors/my-doctors.component';
import { DashboardComponent } from './components/doctors/dashboard/dashboard.component';
import { Auth } from './models/Auth';
import { DashboardAdminsComponent } from './components/container/dashboard-admins/dashboard-admins.component';
import { DashboardUsersComponent } from './components/users/dashboard-users/dashboard-users.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: SignupComponent },
  { path: 'registerPatient', component: RegisterPatientComponent },
  { path: 'registerDoctor', component: RegisterDoctorComponent },

  {
    path: 'container',
    component: ContainerComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'profile', component: ProfileComponent },
      {
        path: 'dashboardAdmin',
        component: DashboardAdminsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'listDoctors',
        component: ListDoctorsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'listUsers',
        component: ListUsersComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'appointmentsList',
        component: AppointmentsListComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'appointmentsNew',
        component: AppointmentsNewComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'misDoctores',
        component: MyDoctorsComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  {
    path: 'doctors',
    component: DoctorsComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'profile', component: ProfileComponent },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'calendar',
        component: CalendarComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'patients',
        component: MyPatientsComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'profile', component: ProfileComponent },
      {
        path: 'dashboardUsers',
        component: DashboardUsersComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'appointmentsList',
        component: AppointmentsListComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'appointmentsNew',
        component: AppointmentsNewComponent,
        canActivate: [AuthGuard],
      },
      { path: 'calendar', component: CalendarComponent },
    ],
  },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
