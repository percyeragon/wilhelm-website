import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let fixture: ComponentFixture<ContactComponent>;
  let component: ContactComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    component.contactMethods = [
      {
        id: 'contact-email',
        label: 'E-Mail',
        value: 'wilhelm@beiche.de',
        href: 'mailto:wilhelm@beiche.de',
        external: false,
        note: 'Für Projektanfragen',
        icon: 'email',
      },
    ];
    fixture.detectChanges();
  });

  it('should keep submit button disabled until form is valid', () => {
    const form = (component as any).quickRequestForm;
    const submitButton = fixture.nativeElement.querySelector('.quick-request-submit') as HTMLButtonElement;

    expect(form.invalid).toBe(true);
    expect(submitButton.disabled).toBe(true);

    form.setValue({
      name: 'Wilhelm',
      email: 'mail@example.com',
      message: 'Ich brauche eine neue Landingpage mit Fokus auf Conversion.',
    });
    fixture.detectChanges();

    expect(form.valid).toBe(true);
    expect(submitButton.disabled).toBe(false);
  });

  it('should mark all controls as touched for invalid submit attempts', () => {
    const form = (component as any).quickRequestForm;
    (component as any).submitQuickRequest();

    expect(form.controls.name.touched).toBe(true);
    expect(form.controls.email.touched).toBe(true);
    expect(form.controls.message.touched).toBe(true);
    expect((component as any).requestStatus).toBe('idle');
  });

  it('should build mailto link, open mail client and reset form on valid submit', () => {
    const form = (component as any).quickRequestForm;
    const openMailClientSpy = vi.spyOn(component as any, 'openMailClient');

    form.setValue({
      name: 'Max Mustermann',
      email: 'max@example.com',
      message: 'Bitte melde dich mit einem Angebot fuer eine moderne Website bei mir.',
    });

    (component as any).submitQuickRequest();

    expect(openMailClientSpy).toHaveBeenCalledTimes(1);
    const mailtoLink = openMailClientSpy.mock.calls.at(-1)?.[0] as string;
    expect(mailtoLink).toContain('mailto:wilhelm@beiche.de');
    expect(mailtoLink).toContain('Projektanfrage%20von%20Max%20Mustermann');
    expect(mailtoLink).toContain('Nachricht%3A%0ABitte%20melde%20dich');
    expect((component as any).requestStatus).toBe('submitted');
    expect(form.getRawValue()).toEqual({
      name: '',
      email: '',
      message: '',
    });
  });

  it('should use fallback email in mailto link when no contact method exists', () => {
    component.contactMethods = [];

    const mailtoLink = (component as any).buildMailtoLink('Nora', 'nora@example.com', 'Kurze Testnachricht mit genug Zeichen.');

    expect(mailtoLink.startsWith('mailto:wilhelm@beiche.de')).toBe(true);
  });
});
