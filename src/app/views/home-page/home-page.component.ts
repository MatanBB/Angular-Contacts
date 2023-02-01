import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user-service.js.service';
@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private userService: UserService) { }

  @Output() onWelcomeUser = new EventEmitter<any>()
  users!: User[]
  users$!: Observable<User[]>
  user!: User
  welcomeUser(ev: MouseEvent) {
    ev.stopPropagation()
    this.onWelcomeUser.emit()
  }

  ngOnInit(): void {
    this.userService.loadUser()
    this.users$ = this.userService.users$
    this.userService.users$.subscribe(users => {
      this.user = users[0]
    })
  }
}