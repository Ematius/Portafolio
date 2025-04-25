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
  showSkills = false;

  toggleSkills() {
    if (this.showSkills) {
      gsap.to('.skill-item', {
        opacity: 0,
        scale: 0.5,
        y: -20,
        stagger: 0.05,
        duration: 0.5,
        ease: 'power2.in',
        onComplete: () => {
          this.showSkills = false;
        },
      });
    } else {
      this.showSkills = true;
      setTimeout(() => {
        gsap.from('.skill-item', {
          opacity: 0,
          scale: 0.5,
          y: -20,
          stagger: 0.05,
          duration: 0.6,
          ease: 'power2.out',
        });
      });
    }
  }
  icons = [
    { name: 'HTML', file: 'HTML.svg' },
    { name: 'CSS', file: 'CSS.svg' },
    { name: 'JS', file: 'javascript.svg' },
    { name: 'TS', file: 'typescript.svg' },
    { name: 'Angular', file: 'angular.svg' },
    { name: 'Node', file: 'Node.svg' },
    { name: 'Express', file: 'express.svg' },
    { name: 'MySQL', file: 'mysql.svg' },
    { name: 'MongoDB', file: 'mongodb.svg' },
    { name: 'Vitest', file: 'vitest.svg' },
    { name: 'Jest', file: 'Jest.svg' },
    { name: 'Prettier', file: 'prettier.svg' },
    { name: 'ESLint', file: 'ESLint.svg' },
    { name: 'Postman', file: 'postman.svg' },
  ];

  @ViewChild('articleRef', { static: true }) articleRef!: ElementRef;
  @ViewChild('divTextRef', { static: true }) divTextRef!: ElementRef;
  @ViewChild('cardRef', { static: true }) cardRef!: ElementRef;

  ngAfterViewInit(): void {
    const mediaQuery = window.matchMedia('(min-width: 1400px)');
    if (mediaQuery.matches) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: this.articleRef.nativeElement,
          start: 'top center',
          end: '+=1000',
          scrub: true,
          pin: true,
          markers: true,
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

    }
  }
}
