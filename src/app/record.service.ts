import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Record } from './components/getrecord/Record';



@Injectable({
  providedIn: 'root'
})
export class RecordService {
  uri = '/record';

  constructor(private http: HttpClient) { }

private apiData = new BehaviorSubject<Record>(null);
  public apiData$ = this.apiData.asObservable();

  addRecord(id, newRecord) {
    var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.uri}/${id}/add`, newRecord,{headers:headers});

}
// addRecord(        blood_pressure, heart_rate,respiratory_rate,        blood_oxygen) {
//     const obj = {
//                 blood_pressure :         blood_pressure,
//         heart_rate: heart_rate,
//         respiratory_rate:respiratory_rate,
//                 blood_oxygen:        blood_oxygen

// //     };
//     this.http.post(`${this.uri}/add`, obj)
//     .subscribe(res => console.log('Done'));
// }

  getRecords(id) {
    return this
           .http
           .get(`${this.uri}/${id}`);
           
    }
deleteRecord(id) {
  return this
            .http
            .get(`${this.uri}/delete/${id}`);
}

saveID(id){
    localStorage.removeItem("id");
    localStorage.setItem("id", JSON.stringify(id));
  }

  setData(data){
      this.apiData.next(data);
  }
}