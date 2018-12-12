import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Patient } from './components/index/Patient';


@Injectable({
  providedIn: 'root'
})
export class PatientService {
  uri = '/patient';

 
  constructor(private http: HttpClient) { }

  private apiData = new BehaviorSubject<Patient>(null);
  public apiData$ = this.apiData.asObservable();

  addPatient(first_name, last_name,dob,address) {
    const obj = {
      first_name : first_name,
      last_name: last_name,
      dob:dob,
      address:address

    };
    this.http.post(`${this.uri}/add`, obj)
    .subscribe(res => console.log('Done'));
}
  getPatients() {
    return this
           .http
           .get(`${this.uri}`);
           
    }

getSinglePatient(id){
  return this.http.get(`${this.uri}/${id}`);
}


setData(data){
  this.apiData.next(data);
}


    editPatient(id) {
  return this
            .http
            .get(`${this.uri}/edit/${id}`);
  }


updatePatient(first_name, last_name,dob,address,id) {

  const obj = {
    first_name : first_name,
    last_name: last_name,
    dob:dob,
    address:address
  };
  this
    .http
    .post(`${this.uri}/update/${id}`, obj)
    .subscribe(res => console.log('Done'));
}


deletePatient(id) {
  return this
            .http
            .get(`${this.uri}/delete/${id}`);
}
}