import { Component, Input } from '@angular/core';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll.directive';
import { ServiceItem } from '../landing.models';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './services.component.html',
})
export class ServicesComponent {
  @Input() services: ServiceItem[] = [];
  @Input() benefits: string[] = [];
}

