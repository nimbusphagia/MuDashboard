import { Component, computed, input } from '@angular/core';
import { MediaRes } from '../../models/media';
import { Thumbnail } from '../thumbnail/thumbnail';

@Component({
  imports: [Thumbnail],
  selector: 'app-image-carousel',
  styleUrl: './image-carousel.css',
  templateUrl: './image-carousel.html',
})
export class ImageCarousel {
  media = input.required<MediaRes[]>();
  height = input<string>('50px');
  limit = input<number>(3);

  visibleMedia = computed(() => this.media().slice(0, this.limit()));
  hiddenCount = computed(() => Math.max(0, this.media().length - this.limit()));
}
