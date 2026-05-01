import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <img
      [ngSrc]="src"
      [alt]="alt"
      [width]="width"
      [height]="height"
      [priority]="priority"
      [loading]="priority ? 'eager' : 'lazy'"
      [sizes]="sizes"
      [srcset]="srcset"
      [style.width]="'100%'"
      [style.height]="'auto'"
      [style.objectFit]="'cover'"
    />
  `,
})
export class ImageComponent {
  @Input() src!: string;
  @Input() alt!: string;
  @Input() width: number = 1200;
  @Input() height: number = 640;
  @Input() priority = false;
  @Input() sizes = '(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 1000px';
  @Input() srcset?: string;
}

