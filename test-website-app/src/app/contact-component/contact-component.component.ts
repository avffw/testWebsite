import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-component',
  templateUrl: './contact-component.component.html',
  styleUrls: ['./contact-component.component.scss']
})
export class ContactComponentComponent implements OnInit {

  sponsorTitle: string = 'Our happy Client';
  sponsors: any[] = [{image:'image1'},{image:'image1'},{image:'image1'},{image:'image1'},{image:'image1'},{image:'image1'},{image:'image1'},{image:'image1'},{image:'image1'},{image:'image1'}];
  formTitle: string = 'Give us a good news';
  name: string;
  email: string;
  subject: string;
  message: string;

  constructor() { }

  ngOnInit() {
  }

}
