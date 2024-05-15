import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from './model/Teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private baseUrl = 'http://localhost:8081/teachers';

  constructor(private http:HttpClient) { }
  getTeacher(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  createTeacher(teacher:Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}`,teacher);
  }
  updateTeacher(id:number,value:any):Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`,value);
  }
  deleteTeacher(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/deleteTeacher/${id}`,{responseType:'text'});
  }
  getTeacherList():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  searchTeachersByFirstName(firstName: string): Observable<Teacher[]> {
    // Implement the logic to search for teachers by first name
    // For example, you can make an HTTP request to your backend API
    // and return an Observable of Teacher[]

    // This is just a placeholder example
    return this.http.get<Teacher[]>(`${this.baseUrl}?firstName=${firstName}`);
  }

}
