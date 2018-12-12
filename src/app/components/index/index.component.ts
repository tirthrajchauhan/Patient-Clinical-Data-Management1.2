import { Component, OnInit } from '@angular/core';
import { Patient } from './Patient';
import { PatientService } from '../../patient.service';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  patients: Patient[];
  patient:Patient;
  id: string;
  addPatient:FormGroup; 
  constructor(private patientService: PatientService, private router: Router,public authService: AuthService,    private fb: FormBuilder) { }

  ngOnInit() {
    this.addPatient = this.fb.group({
      first_name: [''],
      last_name: [''],
      DOB: [''],
      address: [''],
    });



    this.patientService
      .getPatients()
      .subscribe((data: Patient[]) => {
      this.patients = data;
      
    });

    this.id = localStorage.getItem('token');
  }

  
  logout(): void {
    console.log("Logout");
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  
deletePatient(id) {
  this.patientService.deletePatient(id).subscribe(res => {
    console.log('Deleted');
  });
  window.location.reload();
}
singlePatient(id){
  this.patientService.getSinglePatient(id).subscribe((res:any)=>{
    console.log(res);
    this.patients=res;
    this.patientService.setData(res);
    this.router.navigate(['/getrecord']);
    
  })
}

}
