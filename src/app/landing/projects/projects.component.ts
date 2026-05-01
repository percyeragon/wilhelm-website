import { Component, Input } from '@angular/core';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll.directive';
import { ProjectItem } from '../landing.models';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './projects.component.html',
  styleUrl: 'projects.component.scss',
})
export class ProjectsComponent {
  @Input() projects: ProjectItem[] = [];
}

