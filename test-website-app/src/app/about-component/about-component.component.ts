import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-component',
  templateUrl: './about-component.component.html',
  styleUrls: ['./about-component.component.scss']
})
export class AboutComponentComponent implements OnInit {
image:string='../../assets/images/about_left.png';
  constructor() { }

  ngOnInit() {
  }

}
