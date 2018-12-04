import { Component, OnInit } from '@angular/core';
import { Patient } from './Patient';
import { PatientService } from '../../patient.service';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  patients: Patient[];
  id: string;
  constructor(private patientService: PatientService, private router: Router,public authService: AuthService) { }

  ngOnInit() {
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
}


}
