import { Routes } from '@angular/router';
import { DatenschutzComponent } from './legal/datenschutz/datenschutz.component';
import { ImpressumComponent } from './legal/impressum/impressum.component';
import { LandingComponent } from './landing/landing.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: LandingComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'datenschutz', component: DatenschutzComponent },
  { path: '**', redirectTo: '' },
];
