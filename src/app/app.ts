import { Component } from '@angular/core';
import { Dashboard } from '../app_guangiale_cesare/pages/dashboard/dashboard';

@Component({
  selector: 'app-root',
  imports: [Dashboard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'guanciale_cesare';
}
