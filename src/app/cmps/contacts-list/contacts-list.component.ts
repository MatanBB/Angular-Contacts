import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent {
  @Input() contacts!: Contact[] | null
  @Output() onSelect = new EventEmitter<any>()
  @Output() onRemove = new EventEmitter<any>()
}
