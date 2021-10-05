import { NgModule } from '@angular/core';
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
    children: [
      { path: 'listDoctors', component: ListDoctorsComponent },
      { path: 'listUsers', component: ListUsersComponent },
      { path: 'appointmentsList', component: AppointmentsListComponent },
      { path: 'appointmentsNew', component: AppointmentsNewComponent },
    ],
  },

  {
    path: 'doctors',
    component: DoctorsComponent,
    children: [
      { path: 'calendar', component: CalendarComponent },
      { path: 'patients', component: MyPatientsComponent },
    ],
  },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
