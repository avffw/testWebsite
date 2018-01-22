import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-testimonials-component',
  templateUrl: './testimonials-component.component.html',
  styleUrls: ['./testimonials-component.component.scss']
})
export class TestimonialsComponentComponent implements OnInit {
  title: string = '"';
  images: any[] = new Array(5);

  testimonial: any[] = [
    {
      author: {
        name: 'Jane Galadriel',
        position: 'CEO Tengkurep',
      },
      body: '1This is Photoshop\'s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.',
      image: '../../assets/images/people/face1.png',
      id: '0'
    },
    {
      author: {
        name: 'Jane Galadriel',
        position: 'CEO Tengkurep'
      },
      body: '2This is Photoshop\'s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.',
      image: '../../assets/images/people/face2.png',
      id: '1'
    },
    {
      author: {
        name: 'Jane Galadriel',
        position: 'CEO Tengkurep'
      },
      body: '3This is Photoshop\'s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.',
      image: '../../assets/images/people/face3.png',
      id: '2'
    },
    {
      author: {
        name: 'Jane Galadriel',
        position: 'CEO Tengkurep'
      },
      body: '4This is Photoshop\'s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.',
      image: '../../assets/images/people/face4.png',
      id: '3'
    },
    {
      author: {
        name: 'Jane Galadriel',
        position: 'CEO Tengkurep'
      },
      body: '5This is Photoshop\'s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.',
      image: '../../assets/images/people/face5.png',
      id: '4'
    }


  ];
  defaultTestimonial: number;
  currentTestimonial: number;

  constructor() {
    this.defaultTestimonial = Math.floor(this.testimonial.length/2);

  this.currentTestimonial = this.defaultTestimonial;

  }


  ngOnInit() {

  }

  onSelectAuthor(index) {
    this.changeTestimonial(index);
  }
  changeTestimonial(index){
    this.currentTestimonial = index;
  }
}
