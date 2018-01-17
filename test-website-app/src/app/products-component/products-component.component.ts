import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-component',
  templateUrl: './products-component.component.html',
  styleUrls: ['./products-component.component.scss']
})
export class ProductsComponentComponent implements OnInit {
  services: any[] = [
    {
      image: 'image source',
      title: 'web design & development',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
      image: 'image source',
      title: 'branding identity',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
      image: 'image source',
      title: 'mobile app',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
      image: 'image source',
      title: 'search engine optimization',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
      image: 'image source',
      title: 'game development',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
      image: 'image source',
      title: 'made with love',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
