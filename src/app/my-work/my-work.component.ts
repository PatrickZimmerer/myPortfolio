import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss'],
})
export class MyWorkComponent implements OnInit {
  projects = [
    {
      image: 'assets/img/sharky.png',
      title: 'Sharky',
      description: 'JavaScript based game (OOP)',
    },
    {
      image: 'assets/img/ringoffire.png',
      title: 'Sharky',
      description: 'JavaScript based game (OOP)',
    },
    {
      image: 'assets/img/sharky.png',
      title: 'Sharky',
      description: 'JavaScript based game (OOP)',
    },
    {
      image: 'assets/img/sharky.png',
      title: 'Sharky',
      description: 'JavaScript based game (OOP)',
    },
    {
      image: 'assets/img/sharky.png',
      title: 'Sharky',
      description: 'JavaScript based game (OOP)',
    },
    {
      image: 'assets/img/sharky.png',
      title: 'Sharky',
      description: 'JavaScript based game (OOP)',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
