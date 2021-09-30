import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ips } from 'src/app/models/Ips';

@Injectable({
  providedIn: 'root',
})
export class IpsService {
  selectedIps: Ips;
  ips: Ips[] = [];
  // Conexion con el Back
  readonly URL_API = 'http://localhost:5000';

  constructor(private http: HttpClient) {
    this.selectedIps = new Ips();
  }

  getAllIps() {
    return this.http.get<any>(`${this.URL_API}/ips/getAllIps`);
  }

  getIpsById(_id: string) {
    console.log(`${this.URL_API}/ips/getIpsById/${_id}`);
    return this.http.delete(`${this.URL_API}/ips/getIpsById/${_id}`);
  }
}
