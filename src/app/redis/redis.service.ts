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
  
  private baseUrl = 'http://localhost:8083/rest/person';

  constructor(private http: HttpClient) { }

//public get(id: number): Observable<User> {
 //   return this.http.get<User>(`${this.baseUrl}/${id}`);
  //}
 
  // create(user: User): Observable<User> {
 ///   return this.http.post<User>(this.baseUrl, user);
 // }
 
  //public update(id: number, user: UserI): Observable<UserI> {
  ///  return this.http.put<UserI>();
  //}
 
 // public delete(id: number): Observable<any> {
 //   return this.http.delete(`${this.baseUrl}/${id}`);
  //}
 
  public getAll(): Observable<PersonI[]>{
    return this.http.get<PersonI[]>(this.baseUrl + "/all", httpOptions);
  }

}
