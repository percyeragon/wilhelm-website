import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SchemaService {
  private readonly mountedScripts = new Map<string, HTMLScriptElement>();

  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  upsertSchema(id: string, schema: unknown): void {
    const schemaId = id.trim();
    if (!schemaId || !this.document?.head) {
      return;
    }

    const script = this.getOrCreateScript(schemaId);
    script.textContent = JSON.stringify(schema);
  }

  removeSchema(id: string): void {
    const schemaId = id.trim();
    if (!schemaId || !this.document?.head) {
      return;
    }

    const script =
      this.mountedScripts.get(schemaId) ??
      this.document.head.querySelector<HTMLScriptElement>(`script[data-schema-id="${schemaId}"]`);

    if (!script) {
      return;
    }

    script.remove();
    this.mountedScripts.delete(schemaId);
  }

  private getOrCreateScript(id: string): HTMLScriptElement {
    const existingScript =
      this.mountedScripts.get(id) ??
      this.document.head.querySelector<HTMLScriptElement>(`script[data-schema-id="${id}"]`);

    if (existingScript) {
      this.mountedScripts.set(id, existingScript);
      return existingScript;
    }

    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-schema-id', id);
    this.document.head.appendChild(script);
    this.mountedScripts.set(id, script);
    return script;
  }
}
