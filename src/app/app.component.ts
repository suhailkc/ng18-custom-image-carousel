import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageCarouselComponent } from "./components/image-carousel/image-carousel.component";

// Import interface ⤵️
import { ICarouselImage } from "./components/image-carousel/image-carousel.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ImageCarouselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng-custom-image-carousel';

  // Add the data ⤵️ the same as we did to the image-carousel but with a different name for the array
  parentImages: ICarouselImage[] = [
    {
      url: 'https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA',
      caption: 'Standard digital clock',
      alt: ''
    },
    {
      url: 'https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I',
      caption: 'Pokemon themed watch face',
      alt: '',
    },
    {
      url: 'https://fastly.picsum.photos/id/19/2500/1667.jpg?hmac=7epGozH4QjToGaBf_xb2HbFTXoV5o8n_cYzB7I4lt6g',
      caption: 'Tetris themed watch face',
      alt: '',
    },
    {
      url: 'https://fastly.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4',
      caption: 'Paint program themed watch face',
      alt: '',
    },
  ];

}
