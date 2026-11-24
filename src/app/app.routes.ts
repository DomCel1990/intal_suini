import { Routes } from '@angular/router';
import { Dashboard } from '../app_guangiale_cesare/pages/dashboard/dashboard';


export const routes: Routes = [
  {
    path: '',
    component: Dashboard,
    data: {
      title: 'Guanciale Cesare: Prodotti artigianali stagionati | Roma, RM',
      description: 'Guanciale Cesare porta sulle vostre tavole il gusto intenso e inconfondibile che arricchisce i piatti più amati.',
    },
  },
  {
    path: 'il-salame',
    component: Dashboard,
    data: {
      section: 'lux-catalog',
      category: 'salami',
      title: 'Il salame | Guanciale Cesare',
      description: 'I salami Guanciale Cesare, realizzati con carni 100% italiane selezionate secondo antiche ricette laziali.',
    },
  },
  {
    path: 'gli-stagionati',
    component: Dashboard,
    data: {
      section: 'lux-catalog',
      category: 'stagionati',
      title: 'Gli stagionati | Guanciale Cesare',
      description: 'I nostri prodotti stagionati sono il risultato di una sapiente lavorazione artigianale a Roma.',
    },
  },
  {
    path: 'la-pancetta',
    component: Dashboard,
    data: {
      section: 'lux-catalog',
      category: 'pancetta',
      title: 'La pancetta | Guanciale Cesare',
      description: 'La pancetta Guanciale Cesare rappresenta l’equilibrio perfetto tra gusto e tradizione romana.',
    },
  },
  {
    path: 'le-salsicce',
    component: Dashboard,
    data: {
      section: 'lux-catalog',
      category: 'salsicce',
      title: 'Le salsicce | Guanciale Cesare',
      description: 'Le nostre salsicce sono l’emblema della tradizione e della qualità artigianale di Italsuini S.r.l.',
    },
  },
  {
    path: 'info-e-contatti',
    component: Dashboard,
    data: {
      openContacts: true,
      title: 'Info e contatti | Guanciale Cesare',
      description: 'Contatta Italsuini S.r.l. a Roma per informazioni e ordini su Guanciale Cesare e salumi stagionati.',
    },
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];