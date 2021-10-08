import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Status } from 'src/app/models/status'

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  selectedStatus: Status;
  status: Status[] = [];
  // Conexion con el Back
  readonly URL_API = 'http://localhost:5000';

  constructor(private http: HttpClient) {
    this.selectedStatus = new Status();
  }

  getAllStatus() {
    return this.http.get<any>(`${this.URL_API}/status/getAllStatus`);
  }
}
