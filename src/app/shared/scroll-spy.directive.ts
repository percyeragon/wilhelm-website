import { Directive, HostListener, ElementRef, NgZone, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';

@Directive({
  selector: '[appScrollSpy]',
  standalone: true,
})
export class ScrollSpyDirective implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  private scrollSubject$ = new Subject<void>();

  constructor(
    private el: ElementRef,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      this.scrollSubject$
        .pipe(
          debounceTime(50),
          takeUntil(this.destroy$)
        )
        .subscribe(() => this.updateActiveLink());

      window.addEventListener('scroll', () => this.scrollSubject$.next());
    });
    this.updateActiveLink();
  }

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    const link = (event.target as HTMLElement).closest('a[href^="#"]');
    if (link) {
      const href = link.getAttribute('href');
      if (href) {
        setTimeout(() => this.updateActiveLink(), 100);
      }
    }
  }

  private updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    this.ngZone.run(() => {
      const links = this.el.nativeElement.querySelectorAll('a[href^="#"]');
      links.forEach((link: HTMLElement) => link.removeAttribute('aria-current'));

      let currentSection = '';
      const threshold = window.innerHeight / 3;

      sections.forEach((section: Element) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= threshold && rect.bottom > threshold) {
          currentSection = '#' + section.id;
        }
      });

      if (currentSection) {
        const activeLink = this.el.nativeElement.querySelector(
          `a[href="${currentSection}"]`
        );
        if (activeLink) {
          activeLink.setAttribute('aria-current', 'page');
        }
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

