import { Component, Inject, inject, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { FormControl } from '@angular/forms';
import { IPatient } from '../ipatient';
@Inject(PatientService)
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patientName:FormControl=new FormControl("");
  doctorid:FormControl=new FormControl("1");
  patientSummary:FormControl=new FormControl("");
  constructor(  private patientService:PatientService) { }

  ngOnInit(): void {
  }
  saveData(){
    let patient :IPatient ={
      id:0,
      name: this.patientName.value,
      summary:this.patientSummary.value,
      doctor:{
        id:parseInt(this.doctorid.value),
        name:"",
        area:""
      }
    };
    this.patientService.addPatient(patient);

  }

}
