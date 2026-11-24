import { Component, HostListener, signal } from '@angular/core';
export type LegalModalType = 'privacy' | 'cookie' | null;
@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
readonly currentYear = new Date().getFullYear();
  readonly lastUpdated = '24/11/2026';
  readonly activeLegalModal = signal<LegalModalType>(null);

  openLegalModal(type: 'privacy' | 'cookie'): void {
    this.activeLegalModal.set(type);
    this.toggleBodyScroll(true);
  }

  closeLegalModal(): void {
    this.activeLegalModal.set(null);
    this.toggleBodyScroll(false);
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    if (this.activeLegalModal()) {
      this.closeLegalModal();
    }
  }

  ngOnDestroy(): void {
    this.toggleBodyScroll(false);
  }

  private toggleBodyScroll(lock: boolean): void {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = lock ? 'hidden' : '';
    }
  }
}
