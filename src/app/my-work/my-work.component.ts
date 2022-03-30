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
      type: 'Javascript',
    },
    {
      image: 'assets/img/ringoffire.png',
      title: 'Ringoffire',
      description:
        'Angular based drinking app with Firebase (Multiplayer availible)',
      type: 'Angular',
    },
    {
      image: 'assets/img/join.png',
      title: 'Join',
      description:
        'Join is a simple kanban built with JavaScript (Group Project)',
      type: 'Javascript',
    },
    {
      image: 'assets/img/pokedex.png',
      title: 'Pokedex',
      description: 'A Pokedex built with the PokeApi and JavaScript',
      type: 'Javascript',
    },
    {
      image: 'assets/img/instagram.png',
      title: 'Instagram',
      description:
        'A simple Instagram clone with a comment function (using local Storage)',
      type: 'Javascript',
    },
    {
      image: 'assets/img/lieferando.png',
      title: 'Lieferando',
      description: 'A clone of the popular food delivery app',
      type: 'Javascript',
    },
    {
      image: 'assets/img/quizapp.png',
      title: 'Quizapp',
      description: 'A simple quiz game built with Javascript',
      type: 'Javascript',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
