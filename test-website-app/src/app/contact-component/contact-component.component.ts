import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-component',
  templateUrl: './contact-component.component.html',
  styleUrls: ['./contact-component.component.scss']
})
export class ContactComponentComponent implements OnInit {

  sponsorTitle: string = 'Our happy Client';
  sponsors: any[] = [
    {image:'../../assets/images/logos/logo10.png'},
    {image:'../../assets/images/logos/logo1.png'},
    {image:'../../assets/images/logos/logo2.png'},
    {image:'../../assets/images/logos/logo3.png'},
    {image:'../../assets/images/logos/logo4.png'},
    {image:'../../assets/images/logos/logo5.png'},
    {image:'../../assets/images/logos/logo6.png'},
    {image:'../../assets/images/logos/logo7.png'},
    {image:'../../assets/images/logos/logo8.png'},
    {image:'../../assets/images/logos/logo9.png'}];
  formTitle: string = 'Give us a good news';
  name: string;
  email: string;
  subject: string;
  message: string;

  constructor() { }

  ngOnInit() {
  }

}
