import {Component, OnInit} from '@angular/core';



declare var jquery: any;
declare var $: any;


@Component({
  selector: 'app-slideshow-component',
  templateUrl: './slideshow-component.component.html',
  styleUrls: ['./slideshow-component.component.scss']
})
export class SlideshowComponentComponent implements OnInit {
  currentSlide: number;
  defaultSlide: number = 0;
  slides: { title: string, body: string, link: string, id: string }[] = [
    {
      title: "We Are Awesome Creative Agency",
      body: "1This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.",
      link: "link",
      id: "0"
    },
    {
      title: "We love websites",
      body: "2This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.",
      link: "link",
      id: '1'
    },
    {
      title: "We build the future",
      body: "3This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.",
      link: "link",
      id: "2"
    },
    {
      title: "We need Coffee",
      body: "4This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.",
      link: "link",
      id: '3'
    }
  ];

  constructor() {

    if (!this.currentSlide) {
      this.currentSlide = this.defaultSlide;
    }
    setInterval(() => {
      this.changeSlide();

    }, 3000);
  }


  ngOnInit() {

  }

  triggerSlide(trigger:number) {
    this.currentSlide = trigger;
    if (trigger>=0) {
      this.currentSlide = trigger;
    }
    else {
      this.onChangeSlide();

    }


  }

  changeSlide() {
    this.onChangeSlide();
  }

  onChangeSlide() {

    if (this.currentSlide !== this.slides.length - 1) {
      this.currentSlide += 1;
    } else {
      this.currentSlide = this.defaultSlide;
    }

  }


}
