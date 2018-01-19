import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-component',
  templateUrl: './navigation-component.component.html',
  styleUrls: ['./navigation-component.component.scss']
})
export class NavigationComponentComponent implements OnInit {
  image:string = '../../assets/images/logos/footer_logo.png';
  menuItems: any[] = [
    {name:'home'},
    {name:'about'},
    {name:'expertise'},
    {name:'teams'},
    {name:'works'},
    {name:'people say'},
    {name:'contact'}
    ];
  constructor() { }

  ngOnInit() {
  }

}
