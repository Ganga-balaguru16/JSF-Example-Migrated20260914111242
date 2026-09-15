import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = '/api/auth';

  constructor(private http: HttpClient) {}

  logout(): Observable<any> {
    return this.http.post(`${this.baseUrl}/logout`, {});
  }
}