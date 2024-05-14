import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  private baseUrl = 'http://localhost:8081/regions';

  constructor(private http: HttpClient) { }
  getRegion(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  createRegion(region: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}`, region);
  }
  updateRegion(id: number, value: any): Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
  deleteRegion(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }
  getRegionList(): Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

}
