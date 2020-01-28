import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListreguestService {

  constructor(private http:HttpClient) {}

  getlistofrequest():Observable<Listrequest[]>{
  return this.http.get<Listrequest[]>("./assets/ticketrequestdata.json");
}
}
