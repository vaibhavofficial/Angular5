import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserServiceService {

  url = "https://jsonplaceholder.typicode.com/users";
  url2 = "https://jsonplaceholder.typicode.com/photos";

  url3 = "https://reqres.in/";
  url4 = "api/users?page=2"
  url5 = "api/users/"


  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(this.url);
  }

  getUsers2(){
    return this.http.get(this.url3 + this.url4);
  }

  getUser(id){
    return this.http.get(this.url3 + this.url5 + id);
  }

}
