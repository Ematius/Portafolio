import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements AfterViewInit {
  @ViewChild('articleRef', { static: true }) articleRef!: ElementRef;
  @ViewChild('divTextRef', { static: true }) divTextRef!: ElementRef;
  @ViewChild('cardRef', { static: true }) cardRef!: ElementRef;

  ngAfterViewInit(): void {
    ScrollTrigger.matchMedia({

      '(min-width: 1400px)': () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: this.articleRef.nativeElement,
            start: 'top top',
            end: '+=2000',
            scrub: true,
            pin: true,
            markers: false,
          },
        });


        tl.from(this.cardRef.nativeElement, {
          x: 200,
          opacity: 0,
          duration: 1,
          ease: 'power2.out',
        });


        tl.from(this.divTextRef.nativeElement, {
          x: -200,
          opacity: 0,
          duration: 1,
          ease: 'power2.out',
        });
      },

      // Otras resoluciones: nada, o animaciones alternativas si querés
      all: () => {
        // Esto se ejecuta siempre. Útil si querés limpiar cosas, resetear estilos, etc.
      },
    });
  }
}
