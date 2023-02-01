import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom, Observable } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact-service.js.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {

  constructor(
    private contactService: ContactService,
    private router: Router,
    private route:ActivatedRoute) { }

  contact!: Contact

  ngOnInit(): void {
    this.route.params.subscribe(async ({id})=>{
      this.contact = id
      ? await lastValueFrom(this.contactService.getContactById(id))
      :this.contactService.getEmptyContact() as Contact
    })
  }

  async onSaveContact() {
    let contact = await lastValueFrom(this.contactService.save(this.contact))
    console.log(contact);
    console.log(this.contactService.contacts$);
    this.router.navigateByUrl('/')
  }
}
