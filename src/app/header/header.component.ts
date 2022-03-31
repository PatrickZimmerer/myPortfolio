import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  toMySkills() {
    document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
  }
  toMyWork() {
    document.getElementById('my-work').scrollIntoView({ behavior: 'smooth' });
  }
  toAboutMe() {
    document.getElementById('about-me').scrollIntoView({ behavior: 'smooth' });
  }
}
