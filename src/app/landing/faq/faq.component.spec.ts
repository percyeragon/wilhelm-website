import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FaqComponent } from './faq.component';

describe('FaqComponent', () => {
  let fixture: ComponentFixture<FaqComponent>;
  let component: FaqComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FaqComponent);
    component = fixture.componentInstance;
  });

  it('should render all FAQ items', () => {
    component.faqs = [
      {
        id: 'faq-1',
        question: 'Frage 1?',
        answer: 'Antwort 1',
      },
      {
        id: 'faq-2',
        question: 'Frage 2?',
        answer: 'Antwort 2',
      },
    ];

    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;
    const items = element.querySelectorAll('.faq-item');

    expect(items.length).toBe(2);
    expect(element.textContent).toContain('Frage 1?');
    expect(element.textContent).toContain('Antwort 2');
  });

  it('should show empty state when no FAQ entries exist', () => {
    component.faqs = [];

    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelectorAll('.faq-item').length).toBe(0);
    expect(element.querySelector('.faq-empty')?.textContent).toContain('Aktuell sind keine Fragen hinterlegt');
  });

  it('should keep punctuation and umlauts in questions and answers', () => {
    component.faqs = [
      {
        id: 'faq-umlaut',
        question: 'Wie läuft die Übergabe für Änderungen?',
        answer: 'Du erhältst eine kurze Einführung für Inhalte, Bilder und spätere Anpassungen.',
      },
    ];

    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelector('summary')?.textContent).toContain('Übergabe');
    expect(element.querySelector('.faq-item p')?.textContent).toContain('spätere Anpassungen');
  });
});
