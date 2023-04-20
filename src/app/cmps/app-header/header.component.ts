import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/localStorage-service.js.service';
import { UserService } from 'src/app/services/user-service.js.service';
import { User } from 'src/app/models/user.model';
import { lastValueFrom, Observable } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService,
  private localStorageService: LocalStorageService) {}
  _currUser$!: Observable<Object>
  user:User={name:'',coins:0,moves:[]}

  ngOnInit(): void {
    this.userService.setLoggedInUser()
    this._currUser$ = this.userService.currUser$
    this._currUser$.subscribe((data:any) => {
      let newData = data
      this.user = newData
    })
  }
}
