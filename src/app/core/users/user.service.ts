import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  checkLogin(formLogin){
    console.log(formLogin)
    return this.http.post<User>('http://localhost:3000/login',
      {
        email: formLogin['login'],
        password: formLogin['password']
      })
  }
}
