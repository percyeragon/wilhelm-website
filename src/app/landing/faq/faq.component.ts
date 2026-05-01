import { Component, Input } from '@angular/core';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll.directive';
import { FaqItem } from '../landing.models';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FaqComponent {
  @Input() faqs: FaqItem[] = [];
}
