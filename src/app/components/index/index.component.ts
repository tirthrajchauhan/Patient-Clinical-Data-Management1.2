import { Component, OnInit } from '@angular/core';
import { Patient } from './Patient';
import { PatientService } from '../../patient.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  patients: Patient[];

  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.patientService
      .getPatients()
      .subscribe((data: Patient[]) => {
      this.patients = data;
    });
  }

}
