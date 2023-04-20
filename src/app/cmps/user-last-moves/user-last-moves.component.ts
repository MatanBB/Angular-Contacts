import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Move } from 'src/app/models/move';
import { User } from 'src/app/models/user.model';
import { ContactService } from 'src/app/services/contact-service.js.service';
import { LocalStorageService } from 'src/app/services/localStorage-service.js.service';

@Component({
  selector: 'user-last-moves',
  templateUrl: './user-last-moves.component.html',
  styleUrls: ['./user-last-moves.component.scss']
})
export class UserLastMovesComponent implements OnInit{
  constructor(private localStorageService:LocalStorageService){}
  subscription!:Subscription
  lastMoves:Object[]=[]
  ngOnInit(): void {
    let currUser:User=JSON.parse(this.localStorageService.loadFromLocalSession('currUser'))
    if(currUser) this.lastMoves = currUser.moves.slice(-3)
  }
}
