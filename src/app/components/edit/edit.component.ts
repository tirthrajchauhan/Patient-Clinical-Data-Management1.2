

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Patient } from '../index/Patient';
import { PatientService } from '../../patient.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  patient: any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private patientService: PatientService,
    private fb: FormBuilder) {
      this.createForm();
    }
    createForm() {
      this.angForm = this.fb.group({
        first_name: ['', Validators.required ],
        last_name: ['', Validators.required ],
        dob: ['', Validators.required ],
        address: ['', Validators.required ]
         });
      }


updatePatient(first_name, last_name,dob,address) {
  this.route.params.subscribe(params => {
     this.patientService.updatePatient(first_name, last_name,dob,address, params['id']);
     this.router.navigate(['index']);
     
  });
  window.location.reload();
}
    ngOnInit() {
      this.route.params.subscribe(params => {
        this.patientService.editPatient(params['id']).subscribe(res => {
          this.patient = res;
      });
    });
  }
}