export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  text: string;
}

export interface ProcessStep {
  id: string;
  step: string;
  title: string;
  text: string;
  duration: string;
  result: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  tag: string;
  sector: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
  goal: string;
  result: string;
  services: string[];
  cta: {
    label: string;
    href: string;
  };
}

export interface ContactMethod {
  id: string;
  label: string;
  value: string;
  href: string;
  external: boolean;
  note: string;
  icon: 'email';
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: 'linkedin' | 'github';
}

export interface StatItem {
  value: string;
  label: string;
}
