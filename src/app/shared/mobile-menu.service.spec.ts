import { TestBed } from '@angular/core/testing';
import { MobileMenuService } from './mobile-menu.service';

describe('MobileMenuService', () => {
  let service: MobileMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobileMenuService);
    service.close();
  });

  afterEach(() => {
    service.close();
  });

  it('should open menu and lock body scroll', () => {
    service.open();

    expect(service.isOpen()).toBe(true);
    expect(document.body.classList.contains('mobile-menu-open')).toBe(true);
    expect(document.body.style.overflow).toBe('hidden');
  });

  it('should toggle menu and unlock body scroll when closed', () => {
    service.toggle();
    service.toggle();

    expect(service.isOpen()).toBe(false);
    expect(document.body.classList.contains('mobile-menu-open')).toBe(false);
    expect(document.body.style.overflow).toBe('');
  });
});
