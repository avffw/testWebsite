import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials-component',
  templateUrl: './testimonials-component.component.html',
  styleUrls: ['./testimonials-component.component.scss']
})
export class TestimonialsComponentComponent implements OnInit {
  title: string = '"';
  images : any[] = new Array(5);
  testimonial: object =
    {
      author:{
        name:'Jane Galadriel',
        position:'CEO Tengkurep'
      },
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A atque, aut dignissimos ' +
      'dolorum, eveniet expedita explicabo harum ipsa laboriosam ' +
      'libero nisi optio placeat quia quidem quod rem, repellendus tenetur unde!'

    };
  constructor() { }

  ngOnInit() {
  }

}
