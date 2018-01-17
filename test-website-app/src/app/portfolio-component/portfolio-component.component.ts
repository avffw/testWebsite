import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-component',
  templateUrl: './portfolio-component.component.html',
  styleUrls: ['./portfolio-component.component.scss']
})
export class PortfolioComponentComponent implements OnInit {
  title: string = 'our works';
  link: string = 'See All Projects in dribble';
  galleryItems: any[]= new Array(12);
  button: string = 'load more';
  constructor() { }

  ngOnInit() {
  }

}
