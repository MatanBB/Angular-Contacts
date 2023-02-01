import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';
import { UserMsgService } from 'src/app/services/user-msg.service';

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent {
  @Input() contact!: Contact
  @Output() onRemove = new EventEmitter<string>()

  constructor(private router: Router,
    private userMsgService:UserMsgService){}

  getContactImage() {
    return `https://robohash.org/set_set5/${this.contact._id}/3.14159?size=90x90`
  }

  onRemoveContact(ev: MouseEvent) {
    ev.stopPropagation()
    this.userMsgService.setMsg(`Removed ${this.contact.name}`)
  }

  onEditContact(ev: MouseEvent) {
    ev.stopPropagation()
    this.router.navigate(['/edit',this.contact._id])
  }
}
