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
  {image:'member img',
  name: 'semf ucuk',
  position: 'ceo & founder'},
  {image:'member img',
    name: 'semf ucuk',
    position: 'ceo & founder'},
  {image:'member img',
    name: 'semf ucuk',
    position: 'ceo & founder'},
  {image:'member img',
    name: 'semf ucuk',
    position: 'ceo & founder'},
  {image:'member img',
    name: 'semf ucuk',
    position: 'ceo & founder'}

];
  constructor() { }

  ngOnInit() {
  }

}
