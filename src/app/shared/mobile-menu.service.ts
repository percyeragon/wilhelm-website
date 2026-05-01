import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, effect, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MobileMenuService {
  private readonly isOpenState = signal(false);
  readonly isOpen = this.isOpenState.asReadonly();

  constructor(@Inject(DOCUMENT) private readonly document: Document) {
    effect(() => {
      const isOpen = this.isOpenState();
      this.syncBodyState(isOpen);
    });
  }

  open(): void {
    this.isOpenState.set(true);
    this.syncBodyState(true);
  }

  close(): void {
    this.isOpenState.set(false);
    this.syncBodyState(false);
  }

  toggle(): void {
    const nextState = !this.isOpenState();
    this.isOpenState.set(nextState);
    this.syncBodyState(nextState);
  }

  private syncBodyState(isOpen: boolean): void {
    if (!this.document?.body) {
      return;
    }

    this.document.body.classList.toggle('mobile-menu-open', isOpen);
    this.document.body.style.overflow = isOpen ? 'hidden' : '';
  }
}
