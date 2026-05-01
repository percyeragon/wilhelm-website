import { Component, Input } from '@angular/core';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll.directive';
import { ContactMethod, StatItem } from '../landing.models';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  @Input() title = '';
  @Input() heroPills: string[] = [];
  @Input() stats: StatItem[] = [];
  @Input() contactMethods: ContactMethod[] = [];
}

