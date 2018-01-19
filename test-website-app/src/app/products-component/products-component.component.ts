import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-component',
  templateUrl: './products-component.component.html',
  styleUrls: ['./products-component.component.scss']
})
export class ProductsComponentComponent implements OnInit {
  src: string = "../../assets/images/products";
  services: any[] = [
    {
      image: '../../assets/images/products/dev.png',
      title: 'web design & development',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
      image: '../../assets/images/products/brand.png',
      title: 'branding identity',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
      image: '../../assets/images/products/mobile.png',
      title: 'mobile app',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
      image: '../../assets/images/products/seo.png',
      title: 'search engine optimization',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
      image: '../../assets/images/products/game.png',
      title: 'game development',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
      image: '../../assets/images/products/love.png',
      title: 'made with love',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
