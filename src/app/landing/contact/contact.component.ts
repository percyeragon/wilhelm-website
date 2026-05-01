import { Component, inject, Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll.directive';
import { ContactMethod, SocialLink } from '../landing.models';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, RevealOnScrollDirective],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  private readonly fallbackEmail = 'wilhelm@beiche.de';
  private readonly formBuilder = inject(FormBuilder);

  protected readonly quickRequestForm = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(800)]],
  });

  protected requestStatus: 'idle' | 'submitted' = 'idle';

  @Input() contactMethods: ContactMethod[] = [];
  @Input() socialLinks: SocialLink[] = [];

  protected isInvalid(controlName: 'name' | 'email' | 'message'): boolean {
    const control = this.quickRequestForm.controls[controlName];
    return control.invalid && control.touched;
  }

  protected submitQuickRequest(): void {
    if (this.quickRequestForm.invalid) {
      this.quickRequestForm.markAllAsTouched();
      return;
    }

    const { name, email, message } = this.quickRequestForm.getRawValue();
    const mailtoLink = this.buildMailtoLink(name.trim(), email.trim(), message.trim());
    this.openMailClient(mailtoLink);
    this.requestStatus = 'submitted';
    this.quickRequestForm.reset({
      name: '',
      email: '',
      message: '',
    });
  }

  protected buildMailtoLink(name: string, email: string, message: string): string {
    const subject = encodeURIComponent(`Projektanfrage von ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`);
    return `mailto:${this.getContactEmail()}?subject=${subject}&body=${body}`;
  }

  protected openMailClient(mailtoLink: string): void {
    if (typeof window === 'undefined') {
      return;
    }

    window.location.href = mailtoLink;
  }

  private getContactEmail(): string {
    return this.contactMethods.find((method) => method.icon === 'email')?.value ?? this.fallbackEmail;
  }
}

