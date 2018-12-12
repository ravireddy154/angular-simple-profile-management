import {Injectable, Component, OnInit} from '@angular/core'
import { BrowserModule }    from '@angular/platform-browser';
import {Observable} from 'rxjs'
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
import {Http, Headers, Response, RequestOptions} from '@angular/http'
@Injectable({
  providedIn: 'root'
})
export class UsersService {

	private url:string;

  constructor(private http : Http) { }


  getUserResult(number){

  	    let query ="?page="+number;
		this.url = "https://reqres.in/api/users"+query;
		return this.http.get(this.url);
	}
	getUser(number){
		this.url = "https://reqres.in/api/users/"+number;
		return this.http.get(this.url);
	}
}








