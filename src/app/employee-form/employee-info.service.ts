import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeInfoService {

  constructor(private http: HttpClient) { }

  submit(employee : Employee): Observable<any> {
    const url = 'http://localhost:8080/employee/';
    // console.log(employee);
    
    let ourheaders = new HttpHeaders();
    ourheaders.append('Content-Type', 'application/json');
    return this.http.post(url, employee, {headers: ourheaders});
  }

}

