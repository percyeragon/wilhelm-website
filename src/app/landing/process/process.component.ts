import { Component, Input } from '@angular/core';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll.directive';
import { ProcessStep } from '../landing.models';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './process.component.html',
})
export class ProcessComponent {
  @Input() process: ProcessStep[] = [];
  @Input() processHighlights: string[] = [];
}

