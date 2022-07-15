import { Component, Inject, inject, OnInit } from '@angular/core';
import { IPatient } from '../ipatient';
import { PatientService } from '../patient.service';
@Inject(PatientService)
@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  patients!:IPatient[];
  constructor(private patientService:PatientService) { }

  ngOnInit(): void {
    this.patientService.getAllPatient().subscribe(data=>this.patients=data);
  }

}
