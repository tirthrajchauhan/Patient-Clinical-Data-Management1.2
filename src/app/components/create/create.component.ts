import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { PatientService } from '../../patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  angForm: FormGroup;

  constructor(private patientService: PatientService, private fb: FormBuilder, private router: Router) { 
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

  addPatient(first_name, last_name,dob,address) {
    this.patientService.addPatient(first_name, last_name,dob,address);
    this.router.navigate(['/index']);
    window.location.reload();
  
}
  ngOnInit() {
  }

  
}
