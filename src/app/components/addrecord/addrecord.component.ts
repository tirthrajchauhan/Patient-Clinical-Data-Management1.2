import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Record } from '../getrecord/Record';
import { RecordService } from '../../record.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addrecord',
  templateUrl: './addrecord.component.html',
  styleUrls: ['./addrecord.component.css']
})
export class AddrecordComponent implements OnInit {

    id: any;
    addRecord: FormGroup;
  
    records: Record[];
    record: Record;
    patient_id: String;
    blood_pressure:String;
    respiratory_rate:String;
    blood_oxygen:String;
    heart_rate:String;

  patient: any = {};
  angForm: FormGroup;
  constructor(private route: ActivatedRoute,private recordService: RecordService, private fb: FormBuilder, private router: Router) { 
    this.createForm();
  }

  
  createForm() {
    this.angForm = this.fb.group({
      blood_pressure: ['', Validators.required ],
      respiratory_rate: ['', Validators.required ],
      blood_oxygen: ['', Validators.required ],
      heart_rate: ['', Validators.required ]
   });
  }

  onRecordSubmit() {
        const newRecord = {
          patient_id: this.id,
          blood_pressure: this.blood_pressure,
          respiratory_rate: this.respiratory_rate,
          blood_oxygen: this.blood_oxygen,
          heart_rate: this.heart_rate
               
        }
        this.recordService.addRecord(this.id, newRecord).subscribe((record: any) => {
          this.records = record;
          this.router.navigate(['/getrecord']);
        })
    
      }
//   addRecord(blood_pressure, respiratory_rate, blood_oxygen, heartbeat_rate) {
//     this.route.params.subscribe(params => {
//     this.recordService.addRecord(blood_pressure, respiratory_rate, blood_oxygen,heartbeat_rate, params['id']);
//     //this.router.navigate(['/getrecord']);
//     //window.location.reload();
//     });
  
// }
  ngOnInit() {

    this.id=JSON.parse(localStorage.getItem("id"));
  }

}
