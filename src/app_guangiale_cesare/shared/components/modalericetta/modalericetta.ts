import { Component, inject } from '@angular/core';
import { AppStateService } from '../../services/app-state-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modalericetta',
  imports: [CommonModule],
  templateUrl: './modalericetta.html',
  styleUrl: './modalericetta.css',
})
export class Modalericetta {
  state = inject(AppStateService);
  product = this.state.selectedProduct;

  onInputServings(event: Event) {
    const input = event.target as HTMLInputElement;
    this.state.setServings(input.value);
  }

  calculateQty(baseQty: number): number {
    const ratio = this.state.currentServings() / this.product().recipe.basePortions;
    return Math.round(baseQty * ratio * 10) / 10;
  }

}
