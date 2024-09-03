import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisiteService {

  private baseUrl = 'http://localhost:8080/api/visites';  // Remplace avec l'URL réel de ton backend

  constructor(private http: HttpClient) {
    console.log('VisiteService constructor');
  }

  getVisites(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  createVisite(visite: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, visite);
  }

  updateVisite(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteVisite(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getVisite(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

}
