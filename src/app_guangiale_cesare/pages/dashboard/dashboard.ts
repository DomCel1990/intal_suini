import { Component, inject, signal } from '@angular/core';
import { AppStateService } from '../../shared/services/app-state-service';
import { CommonModule } from '@angular/common';
import { Modalericetta } from '../../shared/components/modalericetta/modalericetta';
import { Card } from '../../shared/components/card/card';
import { Footer } from '../../shared/components/footer/footer';
import { Timeline } from '../../shared/components/timeline/timeline';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, Modalericetta, Card, Footer, Timeline],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  isContactModalOpen = false;
  state = inject(AppStateService);

  guancialeImages: string[] = [
    'images/guanciale/guanciale-1.jpg',
    'images/guanciale/guanciale-2.jpg',
    'images/guanciale/guanciale-3.jpg',
    'images/guanciale/guanciale-4.jpg',
    'images/guanciale/guanciale-5.jpg',
  ];

  currentSlide = signal<number>(0);

  prevSlide(): void {
    this.currentSlide.update((index) =>
      index === 0 ? this.guancialeImages.length - 1 : index - 1,
    );
  }

  nextSlide(): void {
    this.currentSlide.update((index) =>
      index === this.guancialeImages.length - 1 ? 0 : index + 1,
    );
  }

  onInputServings(event: Event) {
    const input = event.target as HTMLInputElement;
    this.state.setServings(input.value);
  }

  getFilterClass(catKey: string): string {
    const isActive = this.state.currentCategory() === catKey;
    return isActive
      ? 'bg-gradient-to-r from-amber-600 to-amber-500 border-amber-500 text-black shadow-lg font-bold'
      : 'bg-luxury-card border-amber-500/30 text-gray-300 hover:border-amber-400 hover:text-amber-300';
  }

  openContactModal() {
    this.isContactModalOpen = true;
  }

  closeContactModal() {
    this.isContactModalOpen = false;
  }
}
