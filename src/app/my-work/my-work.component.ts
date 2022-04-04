import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss'],
})
export class MyWorkComponent implements OnInit {
  projects = [
    {
      image: 'assets/img/portfolio.png',
      title: 'Portfolio',
      description: 'My Portfolio built with Angular',
      type: 'Angular',
      link: 'http://patrickzimmerer.de',
    },
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
      title: 'Insta Clone',
      description:
        'A simple Instagram clone with a comment function (using local Storage)',
      type: 'Javascript',
      link: 'http://patrickzimmerer.de/Instaclone/index.html',
    },
    {
      image: 'assets/img/lieferando.png',
      title: 'Liefer Clone',
      description: 'A clone of the popular food delivery app',
      type: 'Javascript',
      link: 'http://patrickzimmerer.de/Lieferclone/index.html',
    },
    {
      image: 'assets/img/quizapp.png',
      title: 'Quizapp',
      description: 'A simple quiz game built with Javascript',
      type: 'Javascript',
      link: 'http://patrickzimmerer.de/Quizapp/index.html',
    },
  ];

  filterdProjects = this.projects;
  constructor() {}

  ngOnInit(): void {}
  showAll() {
    document.getElementById('all-btn').classList.add('selected');
    document.getElementById('angular-btn').classList.remove('selected');
    document.getElementById('javascript-btn').classList.remove('selected');

    this.filterdProjects = this.projects;
  }
  showAngular() {
    document.getElementById('all-btn').classList.remove('selected');
    document.getElementById('angular-btn').classList.add('selected');
    document.getElementById('javascript-btn').classList.remove('selected');
    this.filterdProjects = this.projects.filter((p) => p.type == 'Angular');
  }
  showJavascript() {
    document.getElementById('all-btn').classList.remove('selected');
    document.getElementById('angular-btn').classList.remove('selected');
    document.getElementById('javascript-btn').classList.add('selected');
    this.filterdProjects = this.projects.filter((p) => p.type == 'Javascript');
  }
}
