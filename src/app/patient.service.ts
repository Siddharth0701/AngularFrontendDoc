import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPatient } from './ipatient';
@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient :HttpClient) { }
  getAllPatient():Observable<IPatient[]>{
    return this.httpClient.get<IPatient[]>("https://localhost:44346/api/Patients",
    {
    headers:{"Access-Control-Allow-Origin":"*"}
  }  );
}
addPatient(data:IPatient){
  this.httpClient.post("https://localhost:44346/api/Patients",data,
  {
  headers:{"Access-Control-Allow-Origin":"*"}
}  );
}
  
}
