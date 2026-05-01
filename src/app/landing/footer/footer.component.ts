import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit, OnDestroy {
  isScrollVisible = false;
  private destroy$ = new Subject<void>();
  private scrollSubject$ = new Subject<void>();

  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      this.scrollSubject$
        .pipe(
          debounceTime(50),
          takeUntil(this.destroy$)
        )
        .subscribe(() => this.updateScrollVisibility());

      window.addEventListener('scroll', () => this.scrollSubject$.next());
    });
  }

  private updateScrollVisibility() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    this.ngZone.run(() => {
      this.isScrollVisible = scrollPosition > 500;
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

