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
      link: 'http://patrickzimmerer.de/Sharkie/index.html',
    },
    {
      image: 'assets/img/ringoffire.png',
      title: 'Ringoffire',
      description:
        'Angular based web app with Firebase (Multiplayer availible)',
      type: 'Angular',
      link: 'https://ring-of-fire-ceae1.web.app/',
    },
    {
      image: 'assets/img/join.png',
      title: 'Join',
      description:
        'Join is a simple kanban built with JavaScript (Group Project)',
      type: 'Javascript',
      link: 'http://patrickzimmerer.de/Join/html/index.html',
    },
    {
      image: 'assets/img/pokedex.png',
      title: 'Pokedex',
      description: 'A Pokedex built with the PokeApi and JavaScript',
      type: 'Javascript',
      link: 'http://patrickzimmerer.de/Pokedex/index.html',
    },
    {
      image: 'assets/img/instagram.png',
      title: 'Instagram',
      description:
        'A simple Instagram clone with a comment function (using local Storage)',
      type: 'Javascript',
      link: 'http://patrickzimmerer.de/Instagram/index.html',
    },
    {
      image: 'assets/img/lieferando.png',
      title: 'Lieferando',
      description: 'A clone of the popular food delivery app',
      type: 'Javascript',
      link: 'http://patrickzimmerer.de/Lieferando/index.html',
    },
    {
      image: 'assets/img/quizapp.png',
      title: 'Quizapp',
      description: 'A simple quiz game built with Javascript',
      type: 'Javascript',
      link: 'http://patrickzimmerer.de/Quizapp/index.html',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
