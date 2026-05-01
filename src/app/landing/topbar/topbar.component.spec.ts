import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MobileMenuService } from '../../shared/mobile-menu.service';
import { TopbarComponent } from './topbar.component';

describe('TopbarComponent', () => {
  let fixture: ComponentFixture<TopbarComponent>;
  let component: TopbarComponent;
  let mobileMenuService: MobileMenuService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TopbarComponent);
    component = fixture.componentInstance;
    mobileMenuService = TestBed.inject(MobileMenuService);
    component.navItems = [
      { label: 'Start', href: '#start' },
      { label: 'Kontakt', href: '#kontakt' },
    ];
    fixture.detectChanges();
  });

  afterEach(() => {
    mobileMenuService.close();
  });

  it('should toggle mobile navigation via menu button', () => {
    const button = fixture.nativeElement.querySelector('.menu-toggle') as HTMLButtonElement;

    button.click();
    fixture.detectChanges();

    expect(mobileMenuService.isOpen()).toBe(true);
    expect(button.getAttribute('aria-expanded')).toBe('true');
    expect((fixture.nativeElement.querySelector('.nav') as HTMLElement).classList.contains('is-open')).toBe(
      true
    );
  });

  it('should close the mobile navigation when a nav link is clicked', () => {
    mobileMenuService.open();
    fixture.detectChanges();

    const firstNavLink = fixture.nativeElement.querySelector('.nav a[href="#start"]') as HTMLAnchorElement;
    firstNavLink.click();
    fixture.detectChanges();

    expect(mobileMenuService.isOpen()).toBe(false);
    expect((fixture.nativeElement.querySelector('.nav') as HTMLElement).classList.contains('is-open')).toBe(
      false
    );
  });
});
