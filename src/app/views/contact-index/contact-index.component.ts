import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact-service.js.service';

@Component({
  selector: 'contact-index',
  templateUrl: './contact-index.component.html',
  styleUrls: ['./contact-index.component.scss']
})
export class ContactIndexComponent implements OnInit {

  constructor(private ContactService: ContactService) { }

  contacts!: Contact[]
  contacts$!: Observable<Contact[]>
  ngOnInit(): void {
    this.ContactService.query()
    this.contacts$ = this.ContactService.contacts$
    // this.subscription = this.petService.pets$.subscribe(pets => {
    //     this.pets = pets
    // })
  }

  onRemoveContact(contactId: string) {
    this.ContactService.deleteContact(contactId)
  }
}
