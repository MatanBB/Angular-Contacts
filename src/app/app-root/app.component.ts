import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { UserService } from '../services/user-service.js.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor (private userService:UserService){}

  title = 'angular-misterBitcoin';
  showSite = false
  _currUser$!: Observable<Object>
  user:User={name:'',coins:0,moves:[]}
  welcomeUser(){
    this.showSite = true
  }


  ngOnInit(): void {
    this.userService.setLoggedInUser()
    this._currUser$ = this.userService.currUser$
    this._currUser$.subscribe((data:any) => {
      let newData = data
      this.user = newData
    })
  }
}
