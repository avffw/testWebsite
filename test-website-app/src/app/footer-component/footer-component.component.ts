import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.scss']
})
export class FooterComponentComponent implements OnInit {
  logo: string = '../../assets/images/logos/footer_logo.png';
  locationIcon: string = '../../assets/images/icons/location.png';
  phoneIcon: string = '../../assets/images/icons/phone351.png';
  socialIcons: any[] = [
    {icon:'../../assets/images/social/dribbble4.png'},
    {icon:'../../assets/images/social/facebook25.png'},
    {icon:'../../assets/images/social/google26.png'},
    {icon:'../../assets/images/social/instagram3.png'},
    {icon:'../../assets/images/social/twitter16.png'},
    {icon:'../../assets/images/social/youtube13.png'},
    ];










  constructor() { }

  ngOnInit() {
  }

}
