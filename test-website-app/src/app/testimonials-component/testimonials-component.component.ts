import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials-component',
  templateUrl: './testimonials-component.component.html',
  styleUrls: ['./testimonials-component.component.scss']
})
export class TestimonialsComponentComponent implements OnInit {
  title: string = '"';
  images : any[] = new Array(5);
  testimonial: any[] =[
    {
      author:{
        name:'Jane Galadriel',
        position:'CEO Tengkurep'
      },
      body: 'This is Photoshop\'s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.',
      image:'../../assets/images/people/face1.png'
    },
    {
      author:{
        name:'Jane Galadriel',
        position:'CEO Tengkurep'
      },
      body: 'This is Photoshop\'s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.',
      image:'../../assets/images/people/face2.png'
    },
    {
      author:{
        name:'Jane Galadriel',
        position:'CEO Tengkurep'
      },
      body: 'This is Photoshop\'s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.',
      image:'../../assets/images/people/face3.png'
    },
    {
      author:{
        name:'Jane Galadriel',
        position:'CEO Tengkurep'
      },
      body: 'This is Photoshop\'s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.',
      image:'../../assets/images/people/face4.png'
    },
    {
      author:{
        name:'Jane Galadriel',
        position:'CEO Tengkurep'
      },
      body: 'This is Photoshop\'s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.',
      image:'../../assets/images/people/face5.png'
    }


    ];
  constructor() { }

  ngOnInit() {
  }

}
