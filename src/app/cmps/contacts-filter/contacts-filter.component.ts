import { Component,OnInit,OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ContactFilter } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact-service.js.service';
@Component({
  selector: 'contacts-filter',
  templateUrl: './contacts-filter.component.html',
  styleUrls: ['./contacts-filter.component.scss']
})
export class ContactsFilterComponent implements OnInit,OnDestroy{

  constructor(private contactService: ContactService) { }

  contactFilter!: ContactFilter

  subscription!: Subscription

  ngOnInit(): void {
    this.subscription = this.contactService.contactFilter$.subscribe(contactFilter => {
      this.contactFilter = contactFilter
    })
  }
  
  onSetFilter() {
    this.contactService.setFilter({ ...this.contactFilter })
  }

  ngOnDestroy():void{
    this.subscription.unsubscribe()
  }
}
