import { AfterViewInit, Directive, ElementRef, Input, NgZone, OnDestroy } from '@angular/core';

@Directive({ selector: '[appParallax]', standalone: true })
export class ParallaxDirective implements AfterViewInit, OnDestroy {
  /** Fattore di velocità: 0.3 = sottile, 0.5 = marcato */
  @Input() appParallax = 0.3;

  private layer!: HTMLElement;
  private ticking = false;

  private onScroll = () => {
    if (this.ticking) return;
    this.ticking = true;
    requestAnimationFrame(() => {
      this.update();
      this.ticking = false;
    });
  };

  constructor(private host: ElementRef<HTMLElement>, private zone: NgZone) {}

  ngAfterViewInit() {
    this.layer = this.host.nativeElement.querySelector('[data-parallax-layer]') as HTMLElement;
    this.zone.runOutsideAngular(() => {
      window.addEventListener('scroll', this.onScroll, { passive: true });
      window.addEventListener('resize', this.onScroll, { passive: true });
    });
    this.update();
  }

private update() {
    const r = this.host.nativeElement.getBoundingClientRect();
    const vh = window.innerHeight;
    const f = Number(this.appParallax);

    const extra = Math.ceil(f * (vh / 2 + r.height / 2));
    this.layer.style.top = `-${extra}px`;
    this.layer.style.bottom = `-${extra}px`;

    const center = r.top + r.height / 2;
    const offset = Math.round((vh / 2 - center) * f); // <-- Aggiunto Math.round()

    this.layer.style.transform = `translate3d(0, ${offset}px, 0)`;
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('resize', this.onScroll);
  }
}