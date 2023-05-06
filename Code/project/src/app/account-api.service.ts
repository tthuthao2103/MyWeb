import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from
'@angular/common/http';
import { catchError, map, Observable, retry, throwError, BehaviorSubject } from 'rxjs';
import { Account } from './models/Account';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountAPIService {


  constructor(private _http: HttpClient) { }
  // authUser(user: any){
  //   return this._http.post
    // let UserArray = [];
    // if (localStorage.getItem('Users')){

    // }

  // }

  postLogin(user: any): Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
  }
  return this._http.post<any>("/login",JSON.stringify(user),requestOptions).pipe(
  map(res=>JSON.parse(res) as Account),
  retry(3),
  catchError(this.handleError))
  }


  getAccount(id:string |null): Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")
    const requestOptions:Object={
    headers:headers,
    responseType:"text"
    }
    return this._http.get<any>("/accounts/"+id,requestOptions).pipe(
    map(res=>JSON.parse(res) as Account ),
    retry(3),
    catchError(this.handleError))

  }
handleError(error:HttpErrorResponse){
return throwError(()=>new Error(error.message))
}

putAccount(id:string |null): Observable<any>
{

const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")

const requestOptions:Object={
headers:headers,
responseType:"text"
}
return this._http.put<any>("/accounts",requestOptions).pipe(
map(res=>JSON.parse(res) as Account),
retry(3),
catchError(this.handleError))
}
}
