import { TestBed } from '@angular/core/testing';
import { SchemaService } from './schema.service';

describe('SchemaService', () => {
  let service: SchemaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchemaService);
  });

  afterEach(() => {
    service.removeSchema('test-schema');
  });

  it('should create a json-ld script in document head', () => {
    service.upsertSchema('test-schema', {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Wilhelm Beiche',
    });

    const script = document.head.querySelector('script[data-schema-id="test-schema"]') as HTMLScriptElement;

    expect(script).toBeTruthy();
    expect(script.type).toBe('application/ld+json');
    expect(script.textContent).toContain('Wilhelm Beiche');
  });

  it('should update existing script content without duplicates', () => {
    service.upsertSchema('test-schema', { name: 'Version A' });
    service.upsertSchema('test-schema', { name: 'Version B' });

    const scripts = document.head.querySelectorAll('script[data-schema-id="test-schema"]');

    expect(scripts.length).toBe(1);
    expect(scripts[0].textContent).toContain('Version B');
  });

  it('should remove schema script by id', () => {
    service.upsertSchema('test-schema', { name: 'To be removed' });
    service.removeSchema('test-schema');

    const script = document.head.querySelector('script[data-schema-id="test-schema"]');
    expect(script).toBeNull();
  });
});
