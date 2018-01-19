import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-component',
  templateUrl: './team-component.component.html',
  styleUrls: ['./team-component.component.scss']
})
export class TeamComponentComponent implements OnInit {
  title: string = 'meet our amazing team';
  tag: string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
  catchPhrase: string = 'Become part of out amazing team!';
  teamButton: string = 'we are hiring';
  members: any[] =[
  {image:'../../assets/images/people/blank.png',
  name: 'semf ucuk',
  position: 'ceo & founder'},
  {image:'../../assets/images/people/blank.png',
    name: 'semf ucuk',
    position: 'ceo & founder'},
  {image:'../../assets/images/people/blank.png',
    name: 'semf ucuk',
    position: 'ceo & founder'},
  {image:'../../assets/images/people/blank.png',
    name: 'semf ucuk',
    position: 'ceo & founder'},
  {image:'../../assets/images/people/blank.png',
    name: 'semf ucuk',
    position: 'ceo & founder'}

];
  constructor() { }

  ngOnInit() {
  }

}
