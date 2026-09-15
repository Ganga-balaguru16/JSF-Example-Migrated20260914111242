import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = '/api/employees';

  constructor(private http: HttpClient) {}

  addEmployee(employee: Employee): Observable<any> {
    return this.http.post(this.baseUrl, employee);
  }
}