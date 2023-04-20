import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject, lastValueFrom, Subscription, tap } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact-service.js.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Move } from 'src/app/models/move';
import { UserService } from 'src/app/services/user-service.js.service';
import { User } from 'src/app/models/user.model';
import { LocalStorageService } from 'src/app/services/localStorage-service.js.service';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  constructor(private ContactService: ContactService,
    private localStorageService: LocalStorageService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }


  private _moveFilter$ = new BehaviorSubject<Move[]>([])
  public moveFilter$ = this._moveFilter$.asObservable()
  contact!: Contact
  @Output() onClearContact = new EventEmitter<any>()
  subscription!: Subscription
  subscription2!: Subscription
  // Moves: Move[] = []
  // subscription3!: Subscription
  amountToTransfer: number = 0
  currUser: User = { name: '', coins: 0, moves: [] }
  

  async ngOnInit(): Promise<void> {
    this.subscription = this.route.params.subscribe(async params => {
      const contactId = params['id']
      const contact = await lastValueFrom(this.ContactService.getContactById(contactId))
      this.contact = contact
    })
    this.subscription2 = this.userService.currUser$.subscribe(data => {
      this.currUser = data
    })
  
    
  }
  transferCoins() {
    if (!this.currUser._id || this.currUser.coins < this.amountToTransfer) return console.log('Trouble transfering coins')
    let move = { toId: this.contact._id, to: this.contact.name, at: Date.now(), amount: this.amountToTransfer }
    let userMoves = this.currUser.moves
    userMoves.push(move)
    this.currUser.coins -= this.amountToTransfer
    this.localStorageService.saveToSession('currUser', this.currUser)
    this.userService.updateUser({ ...this.currUser })
    this.ContactService.updateMoveObs(userMoves)
  }

  clearContact(ev: MouseEvent) {
    ev.stopPropagation()
    this.onClearContact.emit()
  }



  ngOnDestroy(): void {
    this.subscription.unsubscribe()
    this.subscription2.unsubscribe()
    // this.subscription3.unsubscribe()
  }
}
