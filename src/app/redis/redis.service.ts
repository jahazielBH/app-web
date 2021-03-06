import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersonI } from '../model/person/person';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class RedisService {
  
  private baseUrl = 'http://104.154.247.177:5045/rest/person';

  constructor(private http: HttpClient) { }
 
  public create(person: PersonI): Observable<PersonI> {
    return this.http.post<PersonI>(`${this.baseUrl}/add`, person);
  }
 
  public update(person: PersonI): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update`, person);
  }
 
  public delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
 
  public getAll(): Observable<PersonI[]>{
    return this.http.get<PersonI[]>(`${this.baseUrl}/all`, httpOptions);
  }

  public getById(id: number): Observable<PersonI> {
    return this.http.get<PersonI>(`${this.baseUrl}/${id}`, httpOptions);
  }

}
