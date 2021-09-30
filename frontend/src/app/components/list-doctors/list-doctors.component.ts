import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Doctor } from 'src/app/models/Doctor';
import { DoctorService } from 'src/app/services/doctor/doctor.service';

@Component({
  selector: 'app-list-doctors',
  templateUrl: './list-doctors.component.html',
  styleUrls: ['./list-doctors.component.css'],
})
export class ListDoctorsComponent implements OnInit {
  loading: boolean = true;
  constructor(public doctorServices: DoctorService) {}

  ngOnInit(): void {
    this.getAllDoctors();
  }

  getAllDoctors() {
    this.doctorServices.getAllDoctors().subscribe((res) => {
      this.doctorServices.doctors = res;
      console.log(this.doctorServices.doctors);
      this.loading = false;
    });
  }

  fillFields(doctor:NgForm) {
  }

  deleteDoctor(id: number) {}
}
