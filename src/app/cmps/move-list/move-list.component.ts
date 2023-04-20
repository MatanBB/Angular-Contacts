import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, filter, map, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { Move } from 'src/app/models/move';
import { User } from 'src/app/models/user.model';
import { ContactService } from 'src/app/services/contact-service.js.service';
import { LocalStorageService } from 'src/app/services/localStorage-service.js.service';
import { UserService } from 'src/app/services/user-service.js.service';

@Component({
  selector: 'move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.scss']
})
export class MoveListComponent implements OnInit {
  @Input() contact!: Contact

  constructor(
    private localStorageService: LocalStorageService,
    private userService: UserService,
    private contactService: ContactService
  ) { }

  Moves: any = []
  subscription!: Subscription
  subscription2!: Subscription
  currUser: User = { name: '', coins: 0, moves: [] }

  ngOnInit(): void {
    let currUser = JSON.parse(this.localStorageService.loadFromLocalSession('currUser'))
    if(currUser) {
      let userMoves = currUser.moves
      this.contactService.onMoveInit(userMoves)
    }
    this.subscription = this.contactService.currUserMoves$.subscribe(data => {
      this.Moves = data.filter((move: any) => {
        if (move.toId === this.contact._id) return move
      }).map((move) => { return move });

    })

    this.subscription2 = this.userService.currUser$.subscribe(data => {
      this.currUser = data
    })

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
    this.subscription2.unsubscribe()
  }
}
