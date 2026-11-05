import { computed, Injectable, signal } from '@angular/core';
import { PRODUCTS_DATA, TIMELINE_EVENTS } from '../constants/date';

@Injectable({
  providedIn: 'root',
})
export class AppStateService {
  currentCategory = signal<string>('all');
  currentServings = signal<number>(4);

  isModalOpen = signal<boolean>(false);
  selectedProductId = signal<string>('guanciale');

  allProducts = Object.values(PRODUCTS_DATA);
  timeLineEvents = TIMELINE_EVENTS;

  filteredProducts = computed(() => {
    const cat = this.currentCategory();
    if (cat === 'all') return this.allProducts;
    return this.allProducts.filter((product) => product.catKey === cat);
  });

  selectedProduct = computed(
    () => PRODUCTS_DATA[this.selectedProductId()] || PRODUCTS_DATA['guanciale'],
  );

  setCategory(catKey: string) {
    this.currentCategory.set(catKey);
  }

  setServings(val: number | string) {
    let num = typeof val === 'string' ? parseInt(val, 10) : val;
    if (isNaN(num) || num < 1) num = 1;
    if (num > 100) num = 100;
    this.currentServings.set(num);
  }

  adjustServings(delta: number) {
    this.setServings(this.currentServings() + delta);
  }

  openModal(productId: string) {
    this.selectedProductId.set(productId);
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
  }


}
