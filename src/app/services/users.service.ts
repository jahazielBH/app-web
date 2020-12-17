import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserApi } from '../models/usersapi';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { UserApiRe } from '../models/userapire';

@Injectable({
    providedIn: 'root'
})

export class UsersService {

    // Define API
    apiURL = 'https://user-imc-api.herokuapp.com';

    constructor(private http: HttpClient) { }

    /*========================================
      CRUD Methods for consuming RESTful API
    =========================================*/

    // Http Options
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }
    // HttpClient API post() method => Obtain User
    loginUser(userApi): Observable<UserApi> {

        console.log(JSON.stringify(userApi));
        return this.http.post<UserApi>(this.apiURL + '/api/auth/signin', JSON.stringify(userApi), this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.MessageError)
            )
    }
    // HttpClient API post() method => Create User
    signup(userApiRe): Observable<UserApiRe> {
        return this.http.post<UserApiRe>(this.apiURL + '/api/auth/signup', JSON.stringify(userApiRe), this.httpOptions)
    }

    MessageError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        } else {
            // Get server-side error
            //errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;

            alert('USUARIO Y CONTRASEÑA INCORRECTOS');
        }
        //window.alert(errorMessage);
        return throwError(errorMessage);
    }

}