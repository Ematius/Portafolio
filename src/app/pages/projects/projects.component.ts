import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  @ViewChild('titleRef', { static: false }) titleRef!: ElementRef;
  @ViewChild('divRef', { static: false }) divRef!: ElementRef;

  ngOnInit(){
    gsap.from(this.titleRef.nativeElement, {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: 'sine.inOut',
      scrollTrigger: {
        trigger: this.titleRef.nativeElement,
        start: 'top 80%',
        toggleActions: 'restart none restart none',
      },
    });
    gsap.from(this.divRef.nativeElement, {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: 'sine.inOut',
      scrollTrigger: {
        trigger: this.divRef.nativeElement,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });
  }
}

