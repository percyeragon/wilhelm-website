import { Component, Input } from '@angular/core';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll.directive';
import { ContactMethod, SocialLink } from '../landing.models';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  @Input() contactMethods: ContactMethod[] = [];
  @Input() socialLinks: SocialLink[] = [];
}

