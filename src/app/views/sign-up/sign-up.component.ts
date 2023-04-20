import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user-service.js.service';
import { Router } from '@angular/router';
@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  constructor(private userService: UserService,
    private router: Router) { }
  userName: string = ''

  onSignUp() {
    if (!this.userName) return console.log('Input is empty...');
    let user = new User
    user.name = this.userName
    this.userService.signUp(user)
    this.userName = ''
    this.router.navigateByUrl('/')
  }
}
