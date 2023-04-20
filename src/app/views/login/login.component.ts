import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { LocalStorageService } from 'src/app/services/localStorage-service.js.service';
import { UserService } from 'src/app/services/user-service.js.service';
import { Router } from '@angular/router';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{
  constructor(private userService:UserService,
    private localStorageService:LocalStorageService,
    private router:Router){}
  userName:string=''

  onLogin(){
    if (!this.userName) return console.log('Input is empty...');
    this.userService.onLogin(this.userName)
    this.userName=''
    this.router.navigateByUrl('/')
  }
}
