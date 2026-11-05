import { Component, inject, input } from '@angular/core';
import { Product } from '../../models/product';
import { AppStateService } from '../../services/app-state-service';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {

  product = input<Product>();

  state = inject(AppStateService);
}
