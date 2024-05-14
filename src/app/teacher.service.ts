import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
    return this.http.delete(`${this.baseUrl}/${id}`,{responseType:'text'});
  }
  getTeacherList():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

}
