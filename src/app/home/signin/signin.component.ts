import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/users/user.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  nameProjec: string = 'Task Project'

  constructor(private userService: UserService, private router:Router) { }

  ngOnInit() {
  }
  vldLogin(formLogin){
    this.userService.checkLogin(formLogin).subscribe( response =>{
      console.log(response);
      this.router.navigate(['home'])
    })
  }
}
