import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { lastValueFrom, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact-service.js.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  constructor(private ContactService: ContactService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  contact!: Contact
  @Output() onClearContact = new EventEmitter<any>()
  subscription!: Subscription

  async ngOnInit(): Promise<void> {
    this.subscription = this.route.params.subscribe(async params => {
      const contactId = params['id']
      const contact = await lastValueFrom(this.ContactService.getContactById(contactId))
      this.contact = contact
    })
  }

  clearContact(ev: MouseEvent) {
    ev.stopPropagation()
    this.onClearContact.emit()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
