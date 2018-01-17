import {Component, OnInit} from '@angular/core';
import set = Reflect.set;


declare var jquery: any;
declare var $: any;


@Component({
  selector: 'app-slideshow-component',
  templateUrl: './slideshow-component.component.html',
  styleUrls: ['./slideshow-component.component.scss']
})
export class SlideshowComponentComponent implements OnInit {
  currentSlide = 0;
  slides: { title: string, body: string, link: string }[] = [
    {
      title: "We Are Awesome Creative Agency",
      body: "This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.",
      link: "link"
    },
    {
      title: "We love websites",
      body: "This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.",
      link: "link"
    },
    {
      title: "We build the future",
      body: "This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.",
      link: "link"
    },
    {
      title: "We need Coffee",
      body: "This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.",
      link: "link"
    }
  ];
  constructor(){
    console.log(this.currentSlide + ' current slide');

  }


  ngOnInit() {
    setTimeout(function () {
      if (this.slides){
        this.currentSlide +=1;
        console.log(this.currentSlide + ' current slide');
      }
    },400);
  }
}
