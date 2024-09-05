import { NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

export interface ICarouselImage {
  url: string;
  caption?: string;
  alt?: string;
}

@Component({
  selector: 'app-image-carousel',
  standalone: true,
  imports: [NgIf],
  templateUrl: './image-carousel.component.html',
  styleUrl: './image-carousel.component.scss'
})
export class ImageCarouselComponent implements OnInit {
  
  @Input() images!: ICarouselImage[];
  @Input() activeImageIndex = 0;
  @Input() lastIndexPosition!: number;
  @Input() config = {
    height: 100,
    with: 100
  }
  


  constructor() {}
  ngOnInit(): void {
    this.lastIndexPosition = this.images.length - 1;
  }

  
  // IF the current image is the last one in the array, reset to the first
  // ELSE add (and self-assign) 1 to the current position ⤵️
  onNext()  {
    if (this.activeImageIndex >= this.lastIndexPosition) {
      this.activeImageIndex = 0;
    } else {
      this.activeImageIndex += 1;
    }
  }

  // IF the current image is the first in the array, show the last image
  // ELSE subtract (and self-assign) 1 to the current position
  onPrevious() {
    if (this.activeImageIndex == 0) {
      this.activeImageIndex = this.lastIndexPosition;
    } else {
      this.activeImageIndex -= 1;
    }
  }
}
