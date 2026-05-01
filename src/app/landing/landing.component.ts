import { Component } from '@angular/core';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import {
  ContactMethod,
  NavItem,
  ProcessStep,
  ProjectItem,
  ServiceItem,
  SocialLink,
  StatItem,
} from './landing.models';
import { ProcessComponent } from './process/process.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServicesComponent } from './services/services.component';
import { TopbarComponent } from './topbar/topbar.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    TopbarComponent,
    HeroComponent,
    ServicesComponent,
    ProcessComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {
  protected readonly title = 'Wilhelm Beiche';

  protected readonly navItems: NavItem[] = [
    { label: 'Start', href: '#start' },
    { label: 'Leistungen', href: '#leistungen' },
    { label: 'Ablauf', href: '#ablauf' },
    { label: 'Projekte', href: '#projekte' },
    { label: 'Kontakt', href: '#kontakt' },
  ];

  protected readonly heroPills = [
    'Webentwicklung',
    'Webdesign',
    'Landingpages',
    'Technische Umsetzung',
    'Wartung & Betreuung',
  ];

  protected readonly services: ServiceItem[] = [
    {
      id: 'service-1',
      title: 'Webdesign mit Klarheit',
      text: 'Ich gestalte moderne Websites, die deine Leistung sauber auf den Punkt bringen und deine Zielgruppe direkt abholen.',
    },
    {
      id: 'service-2',
      title: 'Saubere technische Umsetzung',
      text: 'Deine Seite wird performant, responsive und wartbar aufgebaut – ohne unnötigen Ballast und mit Fokus auf Qualität.',
    },
    {
      id: 'service-3',
      title: 'Inhalte mit Wirkung',
      text: 'Gemeinsam strukturieren wir Inhalte so, dass Vertrauen entsteht, Orientierung gegeben wird und Anfragen leichter werden.',
    },
  ];

  protected readonly benefits = [
    'Moderne, reduzierte Gestaltung mit starker Typografie',
    'Scrollbare Struktur mit klar getrennten Abschnitten',
    'Direkte Kontaktwege und starke Call-to-Actions',
    'Persönliche Zusammenarbeit statt anonymer Agenturprozess',
  ];

  protected readonly process: ProcessStep[] = [
    {
      id: 'process-1',
      step: '01',
      title: 'Kennenlernen',
      text: 'Wir sprechen über dein Angebot, deine Zielgruppe und das Ziel deiner Website.',
      duration: 'Kurz & fokussiert',
      result: 'Klares Zielbild',
    },
    {
      id: 'process-2',
      step: '02',
      title: 'Konzept',
      text: 'Ich entwickle eine Struktur, die deine Inhalte logisch, ruhig und modern präsentiert.',
      duration: 'Strukturphase',
      result: 'Sauberer Seitenaufbau',
    },
    {
      id: 'process-3',
      step: '03',
      title: 'Umsetzung',
      text: 'Die Website wird umgesetzt, geprüft und optisch fein abgestimmt.',
      duration: 'Entwicklung & Feinschliff',
      result: 'Präzise Umsetzung',
    },
    {
      id: 'process-4',
      step: '04',
      title: 'Launch',
      text: 'Nach dem Feinschliff geht deine neue Seite live und ist bereit für Besucher.',
      duration: 'Go-live',
      result: 'Bereit für Anfragen',
    },
  ];

  protected readonly processHighlights = [
    'Klar definierte Schritte ohne unnötige Schleifen',
    'Schnelle Abstimmung mit sichtbaren Zwischenergebnissen',
    'Fokus auf Wirkung, Inhalt und technische Qualität',
  ];

  protected readonly projects: ProjectItem[] = [
    {
      id: 'project-1',
      name: 'Landingpage für Beratung',
      tag: 'Dienstleister-Launch',
      sector: 'Beratung & Coaching',
      imageSrc:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'Beratungs-Landingpage auf einem Laptop mit klarer Struktur und hellen Blautönen.',
      description:
        'Fokussierte One-Page mit klarer Storyline, Social Proof und sauberer Kontaktfuehrung.',
      goal: 'Mehr qualifizierte Anfragen aus der DACH-Region ohne Agentur-Overhead.',
      result: 'Klarer Einstieg, glaubwürdige Leistungssektion und messbar höhere Kontaktquote.',
      services: ['Struktur & Konzept', 'Webdesign', 'Copy-Feinschliff', 'Umsetzung'],
      cta: { label: 'Projekt anfragen', href: '#kontakt' },
    },
    {
      id: 'project-2',
      name: 'Portfolio für Kreative',
      tag: 'Persönliche Marke',
      sector: 'Fotografie & Kreativdienstleistung',
      imageSrc:
        'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'Kreatives Portfolio-Setup mit Kamera, Monitor und inspirierender Arbeitsfläche.',
      description:
        'Visuelles Portfolio mit klaren Leistungsclustern, Referenzteasern und ruhiger Typografie.',
      goal: 'Die eigene Arbeit hochwertig präsentieren und passende Kunden anziehen.',
      result: 'Starker erster Eindruck, bessere Orientierung und höhere Verweildauer.',
      services: ['Layout-System', 'Galerie-Logik', 'Texte & Tonalität', 'SEO-Basics'],
      cta: { label: 'Ablauf kennenlernen', href: '#ablauf' },
    },
    {
      id: 'project-3',
      name: 'Lead-Page für Services',
      tag: 'Conversion-Fokus',
      sector: 'Tech & B2B-Services',
      imageSrc:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageAlt:
        'Technische Website mit Laptop und Datenvisualisierung für einen digitalen Service.',
      description:
        'Conversion-orientiertes Layout mit starken Headlines, Nutzenargumenten und klarer CTA-Kaskade.',
      goal: 'Mehr Terminbuchungen durch klare Argumentation und kurze Wege zum Kontakt.',
      result: 'Präzise Nutzerführung und deutlich strukturierter Funnel.',
      services: ['Message-Workshop', 'UI-Design', 'Landingpage-Flow', 'Analytics-Setup'],
      cta: { label: 'Kontakt aufnehmen', href: '#kontakt' },
    },
  ];

  protected readonly contactMethods: ContactMethod[] = [
    {
      id: 'contact-email',
      label: 'E-Mail',
      value: 'wilhelm@beiche.de',
      href: 'mailto:wilhelm@beiche.de',
      external: false,
      note: 'Für Projektanfragen und kurze Rückfragen.',
      icon: 'email',
    },
  ];

  protected readonly socialLinks: SocialLink[] = [
    {
      id: 'social-linkedin',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/wilhelm-beiche-a9241b202/?skipRedirect=true',
      icon: 'linkedin',
    },
    {
      id: 'social-github',
      label: 'GitHub',
      href: 'https://github.com/percyeragon',
      icon: 'github',
    },
  ];

  protected readonly stats: StatItem[] = [
    { value: 'modern', label: 'Design & Wirkung' },
    { value: 'schnell', label: 'Technik & Performance' },
    { value: 'klar', label: 'Inhalt & Struktur' },
  ];
}
