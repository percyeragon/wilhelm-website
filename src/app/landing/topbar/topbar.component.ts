import { Component, Input, HostListener, HostBinding, NgZone } from '@angular/core';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll.directive';
import { ScrollSpyDirective } from '../../shared/scroll-spy.directive';
import { NavItem } from '../landing.models';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [RevealOnScrollDirective, ScrollSpyDirective],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss',
})
export class TopbarComponent {
  @Input() navItems: NavItem[] = [];
  @HostBinding('class.scrolled') isScrolled = false;

  constructor(private ngZone: NgZone) {}

  @HostListener('document:scroll', [])
  onScroll() {
    this.ngZone.runOutsideAngular(() => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      this.ngZone.run(() => {
        this.isScrolled = scrollPosition > 50;
      });
    });
  }
}

