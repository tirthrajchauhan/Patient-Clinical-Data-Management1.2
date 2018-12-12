import { Component, OnInit } from '@angular/core';
import { Record } from './Record';
import { RecordService } from '../../record.service';
import { Patient } from '../index/Patient';
import { PatientService } from '../../patient.service';

import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-getrecord',
  templateUrl: './getrecord.component.html',
  styleUrls: ['./getrecord.component.css']
})
export class GetrecordComponent implements OnInit {

  patient: Patient;
  records: Record[];
  record: Record;
  id: any;
  patientName: any;
  addRecord:FormGroup; 


redirect(){
  this.router.navigate(['/addrecord'])
}


  constructor(private patientService: PatientService,private recordService: RecordService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.patientService.apiData$.subscribe(patient => {
      //console.log(patient.id);
        if(patient) {
          this.patient = patient;
          this.recordService.saveID(patient._id);
          console.log(patient._id);
        }
    });

    this.id= JSON.parse(localStorage.getItem("id"));

   //console.log(this.patient.id);

    this.recordService
      .getRecords(this.id)
      .subscribe((records: any) => {
      this.records = records;
    });
  }
    
  deleteRecord(id) {
    this.recordService.deleteRecord(id).subscribe(res => {
      console.log('Deleted');
    });
    window.location.reload();
  }
}
