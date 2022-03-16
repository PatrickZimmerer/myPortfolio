import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  images = ['bg1.jpg', 'bg2.jpg', 'bg3.jpg'];
  currentImage = 0;
  showImage = true;
  ngOnInit(){
    this.updateImage();
  }

  updateImage(){
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;
      setTimeout(() => {
        this.showImage = true;
      }, 10)
    }, 10000)
  }

}
