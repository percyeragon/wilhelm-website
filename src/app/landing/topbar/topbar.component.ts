import { Component, Input, HostListener, HostBinding, NgZone, OnDestroy } from '@angular/core';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll.directive';
import { ScrollSpyDirective } from '../../shared/scroll-spy.directive';
import { MobileMenuService } from '../../shared/mobile-menu.service';
import { NavItem } from '../landing.models';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [RevealOnScrollDirective, ScrollSpyDirective],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss',
})
export class TopbarComponent implements OnDestroy {
  @Input() navItems: NavItem[] = [];
  @HostBinding('class.scrolled') isScrolled = false;

  constructor(
    private ngZone: NgZone,
    private mobileMenuService: MobileMenuService
  ) {}

  protected isMenuOpen(): boolean {
    return this.mobileMenuService.isOpen();
  }

  @HostListener('document:scroll', [])
  onScroll() {
    this.ngZone.runOutsideAngular(() => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      this.ngZone.run(() => {
        this.isScrolled = scrollPosition > 50;
      });
    });
  }

  @HostListener('window:resize')
  onWindowResize() {
    if (window.innerWidth > 768) {
      this.closeMobileMenu();
    }
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    this.closeMobileMenu();
  }

  toggleMobileMenu() {
    this.mobileMenuService.toggle();
  }

  closeMobileMenu() {
    this.mobileMenuService.close();
  }

  ngOnDestroy() {
    this.closeMobileMenu();
  }
}

