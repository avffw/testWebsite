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
  currentSlide: number;
  defaultSlide: number = 0;
  slides: { title: string, body: string, link: string }[] = [
    {
      title: "We Are Awesome Creative Agency",
      body: "1This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.",
      link: "link"
    },
    {
      title: "We love websites",
      body: "2This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.",
      link: "link"
    },
    {
      title: "We build the future",
      body: "3This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.",
      link: "link"
    },
    {
      title: "We need Coffee",
      body: "4This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.",
      link: "link"
    }
  ];

  constructor() {
    if (!this.currentSlide) {
      this.currentSlide = this.defaultSlide;
    }
    setInterval(()=>{
      this.changeSlide();
      console.log(this.currentSlide);
    },4000);
    /*for (let i:any = 0; i < this.slides.length; i+=1) {
      let limit:number = this.slides.length;
      this.delaySlide(i,limit);
      i = this.delaySlide(i,limit);
    }*/

  }


  ngOnInit() {
  }
  delaySlide(i){

  }
  resetSlide(){
    this.currentSlide = this.defaultSlide;
  }
  changeSlide() {
    this.onChangeSlide();
  }
  onChangeSlide() {
    console.log(this.currentSlide);
    if(this.currentSlide !== this.slides.length-1){
      this.currentSlide += 1;
    }else {
      this.currentSlide = this.defaultSlide;
    }

  }



}
