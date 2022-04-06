import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public router: Router) {}
  public home: boolean = true;
  ngOnInit(): void {}

  isHomeRoute() {
    return this.router.url === '/';
  }
  toMySkills() {
    document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
  }
  toMyWork() {
    document.getElementById('my-work').scrollIntoView({ behavior: 'smooth' });
  }
  toAboutMe() {
    document.getElementById('about-me').scrollIntoView({ behavior: 'smooth' });
  }
  menuOnClick() {
    document.getElementById('menu-bar').classList.toggle('change');
    document.getElementById('nav').classList.toggle('change');
  }
}
