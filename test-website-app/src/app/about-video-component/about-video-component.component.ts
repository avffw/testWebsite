import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-video-component',
  templateUrl: './about-video-component.component.html',
  styleUrls: ['./about-video-component.component.scss']
})
export class AboutVideoComponentComponent implements OnInit {
  image:string='../../assets/images/icons/play_icon.png';
  constructor() { }

  ngOnInit() {
  }

}
